<template>
  <vs-card type="1" style="padding: 5rem">
    <template #title>
      <h3>Technologies</h3>
    </template>
    <template #img>
      <img src="https://assets.website-files.com/5e9aa66fd3886aa2b4ec01ca/5fd3903b41d20bd2244ec3fd_programminglanguagesstickers.jpg" alt="">
    </template>
    <template #text>
      <vs-row style="">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" :w="$vuetify.breakpoint.smAndDown? 6: 4"  v-for="i in technologies" :key="i" >
        <vs-button style="min-width: 80px"  :color="i.color"  animation-type="rotate" >
          <i :class='i.icon'/>
          <template #animate >
            {{ i.title }}
          </template>
        </vs-button>
        </vs-col>
      </vs-row>
    </template>
  </vs-card>
</template>

<script>
    export default {
        name: "Technologies",
        props: {
            technologies: Array
        },
    }
</script>

<style scoped>

</style>
