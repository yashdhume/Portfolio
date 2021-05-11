const functions = require("firebase-functions");
const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
var path = require("path");
const fs = require('fs')
const app = express();
var serviceAccount = require("./portfolio-2d7bb-firebase-adminsdk-erfv2-7d44e44b27");
app.use(cors());

app.use(express.static(path.join(__dirname, "build")));
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
    }).then(()=>response.redirect("https://yashdhume.com/alex"))
})
app.post('/api/setLyric', (request, response)=>{
    let iLyric =  Object.keys(request.body)[0];
    admin.firestore().collection('random').doc('lyric').set({
        lyric:iLyric.substring(1, iLyric.length-1).split('\\n')
    }).then(()=>response.send("Submitted Successfully"))

})
app.get('/api/lyric', (request, response)=>{
    admin.firestore().collection('random').doc('lyric').get()
        .then((doc)=>response.send(doc.data().lyric))
})
app.get('/api/setAcc', (request, response)=>{
    admin.firestore().collection('random').doc('test').set({
        a: request.query.dir
    }).then(() =>  response.send('YEE BUDDY' ));
})
app.use(
    "/api/pokemon/model",
    express.static(path.join(__dirname, "./model/model.json"))
);
app.use(
    "/api/pokemon",
    express.static(path.join(__dirname, "./model"))
);
app.post('/api/pokemon/song', function(request, response){
    response.send(request.body);
    fs.writeFileSync('output.mid', new Buffer(request.body.toArray()));
});
exports.app = functions.https.onRequest(app)