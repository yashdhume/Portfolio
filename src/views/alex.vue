<template>
  <v-img :src="picture.link">

  </v-img>
</template>

<script>
import {db} from "@/firebase";

export default {
name: "alex",
  data: () => ({
    picture: ""
  }),
  firestore() {
    return {
      picture: db.collection('random').doc('Alex'),
    }
  }
}
</script>

<style scoped>

</style>