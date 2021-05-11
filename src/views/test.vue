<template>
<div>
  <vs-button @click="onSubmit('up')">Up</vs-button>
  <vs-button @click="onSubmit('down')">down</vs-button>
  <vs-button @click="onSubmit('left')">left</vs-button>
  <vs-button @click="onSubmit('right')">right</vs-button>

</div>
</template>

<script>
import axios from 'axios';
export default {
name: "test",
  methods: {
    onSubmit(dir) {
      axios.get(`http://localhost:5000/api/setAcc?dir=${dir}`).then(console.log(dir));
    }
  }
}
</script>

<style scoped>

</style>