<template>
  <vs-row justify="center">
        <v-timeline align-center>
            <v-timeline-item
                    v-for="(item, i) in schools" :key="i"
                    fill-dot
            >
                <template v-slot:icon>
                    <a :href="item.link">
                        <v-avatar>
                            <img v-bind:src="item.picture">
                        </v-avatar>
                    </a>
                </template>

                <template v-slot:opposite>
                    <span

                            :class="`headline font-weight-bold ${item.color}--text`"
                            v-text="item.year"
                    ></span>
                </template>

                    <vs-card


                            :color=item.color

                    >
                      <template #title><h3>{{item.school}}</h3></template>
                      <template #text>
                            <p>{{item.text}}</p>
                      </template>
                    </vs-card>
            </v-timeline-item>
        </v-timeline>
  </vs-row>
</template>

<script>
    export default {
        name: "WorkEducation",
        props:{
            schools: Array
        }
    }
</script>

<style scoped>

</style>
