const functions = require("firebase-functions");
const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const app = express();
var serviceAccount = require("./portfolio-2d7bb-firebase-adminsdk-erfv2-1facbf0dcf.json");
const axios = require('axios')
const cheerio = require('cheerio');
const currency = require("currency.js");
app.use(cors());

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://portfolio-2d7bb.firebaseio.com"
});
app.get('/api/game', (request, response) => {
    admin.firestore().collection('game').doc(request.query.gameName).get().then(snapshot => {
        if (!snapshot.exists) return;
        let data = snapshot.data().scores.sort(function (a, b) {
            return a.score - b.score;
        });
        let sendData;
        if (request.query.all === 'yes') sendData = {data: data.reverse()}
        else sendData = {data: data.reverse().splice(0, 5)}
        response.send(sendData);
    })
})
app.post('/api/addScore', (request, response) => {
    admin.firestore().collection('game').doc(request.query.gameName).update({
        scores: admin.firestore.FieldValue.arrayUnion(request.body)
    }).then(() => response.send(request.body))
})
app.post('/api/frogi', (request, response) => {
    console.log(request.body['name'])
    const data = {
        name: request.body.name,
        date: new Date(),
        weight: request.body.weight,
    }
    admin.firestore().collection('random').doc('frogi').set(data, {merge: true}).then(() => response.send(request.body))
})

app.get('/api/setAlex', (request, response) => {
    admin.firestore().collection('random').doc('Alex').set({
        link: request.query.link
    }).then(() => response.redirect("https://yashdhume.com/alex"))
})
app.post('/api/setLyric', (request, response) => {
    let iLyric = Object.keys(request.body)[0];
    admin.firestore().collection('random').doc('lyric').set({
        lyric: iLyric.substring(1, iLyric.length - 1).split('\\n')
    }).then(() => response.send("Submitted Successfully"))

})

app.get('/api/lyric', (request, response) => {
    admin.firestore().collection('random').doc('lyric').get()
        .then((doc) => response.send(doc.data().lyric))
})
app.get('/api/setAcc', (request, response) => {
    admin.firestore().collection('random').doc('test').set({
        a: request.query.dir
    }).then(() => response.send('YEE BUDDY'));
})

app.post('/api/addPrice', (request, response) => {
    admin.firestore().collection('price').add(request.body).then(() => response.send("Added"))
});
app.post('/api/testFrogi', (request, response) => {
    functions.logger.log(request.body)
    response.send(request.body)
});

function checkPrice() {
    return new Promise((resolve, reject) => {
        admin.firestore().collection('price').get()
            .then(snapshot => {
                let sendData = []
                snapshot.forEach(snapshotEach => {
                    let snapshotData = snapshotEach.data()
                    axios.get(snapshotData.link,
                        {
                            headers: {
                                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36"
                            }
                        }
                    )
                        .then(r => {
                            let price = cheerio.load(r.data)(snapshotData.tag).html();
                            sendData.push({name: snapshotData.name, price: price, id: snapshotEach.id})
                            if (sendData.length === snapshot.size) {
                                resolve(sendData)
                            }
                        })
                        .catch(catchError => {
                            functions.logger.error("Error scraping", catchError)
                            reject(catchError)
                            resolve("Error Scrapping")
                        })
                })


            })
    })
}

function sendNotifications(title, message) {
    return new Promise(((resolve, reject) => {
        let itemsProcessed = 0;

        admin.auth().listUsers(10).then(users => {
            let allFCMTokens = users.users.map(r => r.uid).map(uid => {
                return admin.auth().getUser(uid).then(r => {
                    return r.customClaims.fcmToken
                })
            })
            Promise.all(allFCMTokens).then(tokens => {
                console.log(tokens)
                admin.messaging().sendMulticast({
                    tokens: tokens,
                    notification: {
                        title: title,
                        body: message,
                    },
                }).then(() => {
                    itemsProcessed++;
                    if (tokens.length === itemsProcessed) resolve("Done")
                }).catch((e) => reject(e));
            });

        }).catch(e => reject(e))
    }))
}
function updatePrice(){
    return new Promise((resolve, reject) =>{
        checkPrice()
            .then(prices => {
                let newPrices = []
                let itemsCollected = 0;
                prices.forEach(newPrice => {
                    admin.firestore().collection('price').doc(newPrice.id).get()
                        .then(oldPrice => {
                            itemsCollected++;
                            if(!oldPrice.data().price){
                                admin.firestore().collection('price').doc(newPrice.id).set({price: newPrice.price}, {merge: true})
                            }
                            if (currency(oldPrice.data().price).value > currency(newPrice.price).value) {
                                admin.firestore().collection('price').doc(newPrice.id).set({price: newPrice.price}, {merge: true})
                                newPrices.push(newPrice)
                            }
                            if (itemsCollected === prices.length) {
                                if (newPrices.length > 0) {
                                    let notificationBody = "";
                                    newPrices.forEach(r=>notificationBody+=`${r.name} dropped to ${r.price}`)
                                    sendNotifications("PRICE DROPPED!", notificationBody).then((e)=>resolve(e)).catch(e=>reject(e))

                                } else {
                                    functions.logger.log("No New Low Prices")
                                    reject("No New Low Prices")
                                }
                            }
                        })
                })
            })
            .catch(catchError => {
                functions.logger.error("Error", catchError)
            })
    } )

}
app.get('/api/checkPrice', (request, response) => {
    checkPrice().then(r => {
        response.send(r)
    }).catch((e) => response.send(e))
});
app.get('/api/updatePrice', (request, response) => {
    updatePrice().then(r => {
        response.send(r)
    }).catch((e) => response.send(e))
});
app.get('/api/getWorkout', (request, response) => {
    admin.database().ref('Workout')
        .on('value', snapshot => {
            response.send(snapshot.val())
        }, catchError => {
            response.send(catchError.name)
        })
})
app.post('/api/addUserFCM', ((request, response) => {
    console.log("RUNS");
    functions.logger.log("BODY", request.body);
    console.log(typeof request.body);

    admin.auth().verifyIdToken(request.headers.authorization).then(r => {
        admin.auth().setCustomUserClaims(r.uid, {fcmToken: request.body.token}).then(r => {
            functions.logger.log(r)
            console.log(r);
            response.send("Added")
        }).catch((e) => response.send(e))
    })
}))



exports.checkPriceUpdate = functions.pubsub.schedule('*/10 * * * *').onRun(() => {
    updatePrice().then(r => {
        functions.logger.log(r)
    }).catch((e) => functions.logger.error(e))
});
exports.app = functions.https.onRequest(app)