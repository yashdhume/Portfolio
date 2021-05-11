<template>
<!--  <v-img :src="picture.link"/>-->
<div>
{{text.a}}
</div>
</template>

<script>
import {db} from "@/firebase";

export default {
name: "alex",
  data: () => ({
    picture: "",
    text: ''
  }),
  firestore() {
    return {
      picture: db.collection('random').doc('Alex'),
      text:  db.collection('random').doc('test')
    }
  }
}
</script>

<style scoped>

</style>