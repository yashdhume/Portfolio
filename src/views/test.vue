<template>
  <div>
    <v-text-field label="Title" v-model="title"/>
    <v-text-field label="Message" v-model="message"/>
    <vs-button @click="onSubmit">Send</vs-button>
    <vs-button @click="test">Send2</vs-button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "test",
  data: () => {
    return {
      title: '',
      message: '',
    }
  },
  methods: {
    test(){
      axios.post('https://fcm.googleapis.com/fcm/send', {
        "notification": {
          "title": this.title,
          "body": this.message
        },
        "priority": "high",
        "data": {
          "clickaction": "FLUTTERNOTIFICATIONCLICK",
          "id": "1",
          "status": "done"
        },
        "to": "/topics/all"
      }, {
        headers: {
          Authorization: 'key=AAAA-AUNm8E:APA91bG7TldjlOIjldTtlyXzgJAEPwWORco1R4Mq6TugSzffb3U8YH2Prfj47WDChifR2pM5_cMDJQ-mTWZ14qunYbMRaPWFLP4SqddPYB7e1AwvjAiKMNPLeEhlFxelC2xOiGoiF9Et'
        }
      }).then(response => console.log(response))
          .catch(catchError => console.log(catchError));
    },
    onSubmit() {
      axios.post('https://yashdhume.com/api/testFrogi',  "192.194.12"
      ).then(response => console.log(response))
          .catch(catchError => console.log(catchError));
    }
  }
}
</script>

<style scoped>

</style>