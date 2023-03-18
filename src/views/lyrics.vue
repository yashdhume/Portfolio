<template>
  <div>
    <v-textarea
        v-model="lyric"
        label="Enter Lyrics"
        full-width
        multiline
        :height="500"
        style="padding: 5rem"
    />
    <vs-button  success  @click="sendData" style="float: right">
      Send
    </vs-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "lyrics",
  data() {
    return {
      lyric: '',
    }
  },
  methods: {
    sendData() {
      axios.post("https://yashdhume.com/api/setLyric",JSON.stringify(this.lyric) )
          .then((response)=> this.openNotification(response.data, 'success'))
      .catch(()=>this.openNotification("Error", 'danger'))
    },
    openNotification(res, color) {
      let position = 'top-right';
      this.$vs.notification({
        color,
        position,
        title: res,
      })
    }
  }
}
</script>

<style>
.vs-notification__content__header{
  font-family: Roboto,sans-serif;
}
</style>