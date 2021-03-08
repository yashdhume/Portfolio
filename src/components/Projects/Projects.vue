<template>
  <v-container fluid>
    <vs-row >
      <vs-col >
        <vs-row justify="space-around">
          <vs-card v-for="i in projects" :key="i.title" :type="$vuetify.breakpoint.smAndDown? 1: 5" style="padding: 1rem">
            <template #title>
              <h3>{{ i.title }}</h3>
            </template>
            <template #img>
              <img :src="i.photo" alt="" >
            </template>
            <template #text>
              <p>
                {{ i.description }}
              </p>
            </template>
            <template #interactions>
                <vs-button  style="min-width: 60px" v-for="link in i.links" :color="link.color" :key="link" :href="link.link" animation-type="rotate" >
                  <i :class='link.icon'></i>
                  <template #animate >
                    {{ link.text }}
                  </template>
                </vs-button>
            </template>
          </vs-card>
        </vs-row>


      </vs-col>
    </vs-row>
  </v-container>
</template>

<script>
export default {
  name: "Projects",
  props:{
    projects: Array,
  },
  methods:{
    changeColorProject(hover) {
      return hover ? "red" : "grey"
    },
  }
}
</script>

<style scoped>

</style>
