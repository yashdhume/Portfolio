const functions = require("firebase-functions");
const express = require('express');
const admin = require('firebase-admin');
const app = express();
var serviceAccount = require("./portfolio-2d7bb-firebase-adminsdk-erfv2-7d44e44b27");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://portfolio-2d7bb.firebaseio.com"
});
app.get('/api/game', (request, response)=>{
    admin.firestore().collection('game').doc(request.query.gameName).get().then(snapshot=>{
        if(!snapshot.exists) return;
        let data = snapshot.data().scores.sort(function (a, b){
            return a.score - b.score;
        });
        let sendData;
        if(request.query.all==='yes') sendData = {data: data.reverse()}
        else sendData =  {data: data.reverse().splice(0,5)}
        response.send(sendData);
    })
})
app.post('/api/addScore', (request, response)=>{
    admin.firestore().collection('game').doc(request.query.gameName).update({
        scores:admin.firestore.FieldValue.arrayUnion(request.body)
    }).then(()=>response.send(request.body))
})

app.get('/api/setAlex', (request, response)=>{
    admin.firestore().collection('random').doc('Alex').set({
        link: request.query.link
    }).then(()=>response.send("Image Set"))
})
exports.app = functions.https.onRequest(app)