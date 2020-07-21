<template>
    <v-container fluid>
        <v-timeline align-top>
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
                            top
                    ></span>
                </template>
                <v-hover>
                    <v-card
                            slot-scope="{ hover }"
                            :class="`elevation-${hover ? 12 : 2}`"
                            :color=item.color
                            dark

                    >
                        <v-card-title class="title">{{item.school}}</v-card-title>
                        <v-card-text class="white text--primary">
                            <p>{{item.text}}</p>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-timeline-item>
        </v-timeline>
    </v-container>
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
