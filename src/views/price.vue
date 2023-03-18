<template>
  <div>
    <v-text-field label="Name" v-model="name"/>
    <v-text-field label="Link" v-model="link"/>
    <p>ID = # ; class = . ;</p>
    <v-text-field label="Tag" v-model="tag"/>
    <vs-button @click="onSubmit">Send</vs-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "price",
  data: () => {
    return {
      name: '',
      link: '',
      tag: '',

    }
  },
  methods:{
    onSubmit(){
      axios.post("https://yashdhume.com/api/addPrice",
          {
            name:this.name,
            link: this.link,
            tag: this.tag
          }
      ).then(r=>this.$vs.notification({
        title: 'Success',
        text: r.data,
        color: 'success',
        position: 'top-right'
      }))
    }
  }
}
</script>

<style scoped>

</style>