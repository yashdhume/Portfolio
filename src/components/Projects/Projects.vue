<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-row
                        align="center"
                        class="d-flex justify-center"
                >
                    <v-card v-for="i in projects" :key="i.title"
                            class=" mb-auto text-center  ma-6 pa-5  justify-center" height="500"
                            max-width="350" hover>
                        <v-card-img>
                            <v-avatar size="150" tile class="">
                                <v-img :src="i.photo" contain></v-img>
                            </v-avatar>
                        </v-card-img>
                        <v-card-text grow>
                            <div class="subheading grow">{{ i.title }}</div>
                            <div class="grey--text flex-grow-1">{{ i.description }}</div>
                        </v-card-text>
                        <v-layout justify-center>
                            <v-card-actions class="justify-center" style="position: absolute; bottom: 0;">
                                <v-col  v-for="(link, j) in i.links" :key="link">
                                    <v-hover v-slot:default="{ hover }">
                                        <v-btn class="" icon>
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on }">
                                                    <a :href="link" style="text-decoration:none">
                                                        <v-icon v-on="on"
                                                                :color=changeColorProject(hover)>
                                                            {{i.icons[j]}}
                                                        </v-icon>
                                                    </a>
                                                </template>
                                                <span>{{i.names[j]}}</span></v-tooltip>
                                        </v-btn>
                                    </v-hover>
                                </v-col>
                            </v-card-actions>
                        </v-layout>
                    </v-card>
                </v-row>

            </v-col>
        </v-row>
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
