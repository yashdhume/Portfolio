<template>
    <vs-card :type="$vuetify.breakpoint.smAndDown? 1: 4"  style="padding: 5rem" >
      <template #title>
        <h3>About Me</h3>
      </template>
      <template #img>
        <img :src="$vuetify.breakpoint.smAndDown? pictures[0]['profilePicture2']:pictures[0]['profilePicture'] " alt="">
      </template>
      <template #text>
        <p>
          {{getTimeOfDay()}} {{aboutMe[0]['aboutMe'] }}
        </p>
      </template>
    </vs-card>
</template>

<script>
    export default {
        name: "AboutMe",
        props:{
            pictures: Array,
            aboutMe: Array,
        },
      methods:{
        getTimeOfDay: function () {
          var date = new Date();
          var hour = date.getHours();

          if (hour < 12)
            return "Good Morning!";
          else if (hour < 18)
            return "Good Afternoon!";
          else
            return "Good Evening!";

        },
      }
    }
</script>

<style scoped>

</style>
