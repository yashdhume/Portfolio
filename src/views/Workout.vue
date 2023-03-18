<template>
  <v-container>
    <v-date-picker v-model="currentDate"/>
    <v-select
        v-model="selectedProgram"
        :items="programTitles"
        label="Program"
        solo
    ></v-select>
    <div v-for="(i, index) in currentWorkout" :key="index">
      <h1>{{ i.title }}</h1>
      <v-row dense>
        <v-col cols="12" v-for="(j, jIndex) in i.exercises" :key="jIndex">
          <v-card>
            <v-card-title style="justify-content: center; text-align:center; word-break: break-word!important;">
              {{ j.title }}
            </v-card-title>
            <v-card-text v-text="j.instruction" class="text-center" style="color: black"/>
                        <v-card-text class="text-center">
                          <iframe v-if='j.youtube!==""' style="align-content: center"
                                  :src="'https://www.youtube.com/embed/'+j.youtube"/>
                          <div v-else>No Youtube Video</div>
                        </v-card-text>
            <v-card-actions style="justify-content: center; font-size: 1.5rem">{{ j.sets }}</v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>

  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Workout",
  data: () => {
    return {
      currentDate: "2022-9-1",
      data: [],
      workouts: [],
      currentWorkout: {},
      programTitles: [],
      selectedProgram: "Coach Reeves",
    }
  },
  watch: {
    currentDate(d) {
      const index = this.data.findIndex(e => new Date(d).toDateString() === new Date(e.date).toDateString() && this.selectedProgram === e.programTitle)
      if (index !== -1) {
        console.log(this.currentWorkout)
        this.currentWorkout = this.data[index].workout
        console.log(this.currentWorkout)
      }
    },
    selectedProgram(p){
      const index = this.data.findIndex(e => new Date(this.currentDate).toDateString() === new Date(e.date).toDateString() && p === e.programTitle)
      if (index !== -1) {
        console.log(this.currentWorkout)
        this.currentWorkout = this.data[index].workout
        console.log(this.currentWorkout)
      }
    }
  },
  mounted() {
    axios.get('https://yashdhume.com/api/getWorkout').then(this.parse)
  },
  methods: {
    parse(res) {
      this.data = res.data.map(r => {
        return {id: r.id, date: new Date(r.date), programTitle: r.programTitle, workout: r.workout}
      })


      this.programTitles = [...new Set(this.data.map(r => r.programTitle))]
    },

  },
}
</script>

<style scoped>

</style>