<template>
    <div class="welcome" v-scroll="onScroll">
        <section>
            <v-parallax
                    dark
                    height="1000"
                    :src="pictures[0]['mainParallax']"
                    jumbotron
            >

                <v-layout
                        justify-center
                        align-center
                        column
                >
                    <p class="display-4  text-center">Yash Dhume</p>

                    <v-carousel
                            align="center"
                            class="elevation-0"
                            cycle
                            interval="2000"
                            hide-delimiters
                            hide-delimiter-background
                            :show-arrows=false
                            elevation="0"
                            touchless
                            vertical
                            height="auto"
                            dark
                    >
                        <v-carousel-item
                                cycle
                                v-for="(item, i) in carousel[0]['carousel']"
                                :key="i"
                        >
                            <v-row
                                    justify-center
                                    class="fill-height"
                                    align="center"
                                    justify="center"
                            ><h2 class="display-2">{{item}}</h2>

                            </v-row>
                        </v-carousel-item>
                    </v-carousel>
                    <v-column>
                        <v-column v-for="i in socialLinks" :key="i.title">
                            <v-hover v-slot:default="{ hover }">
                                <v-btn x-large dark icon>
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <a :href="i.link" style="text-decoration:none">
                                                <v-icon x-large v-on="on"
                                                        :color=changeColor(hover)>
                                                    {{i.icon}}
                                                </v-icon>
                                            </a>
                                        </template>
                                        <span>{{i.title}}</span></v-tooltip>
                                </v-btn>
                            </v-hover>
                        </v-column>
                    </v-column>
                </v-layout>
            </v-parallax>


        </section>
        <section>
            <v-container fluid
                         justify-space-between
                         v-if="$vuetify.breakpoint.mdAndUp">
                <v-layout column>
                    <v-card transition="slide-x-transition" class="mb-auto  ma-6 pa-5">

                        <v-layout row
                                  justify-space-around
                                  align-center

                        >
                            <v-flex
                                    xs7>
                                <v-card-title primary-title class="justify-center">
                                    <div class="display-2">About Me</div>
                                </v-card-title>
                                <div class="fill-height bottom-gradient"></div>
                                <p>
                                    {{getTimeOfDay()}} {{aboutMe[0]['aboutMe']}}
                                </p>
                                <div class="caption">
                                    *Note* This website was created by me using Vue.Js and Firebase
                                </div>
                            </v-flex>
                            <v-flex
                                    xs3
                                    align-right
                                    layouts
                            >
                                <v-hover>
                                    <v-img
                                            slot-scope="{hover}"
                                            class="mx-auto ml-auto ma-auto"
                                            :style="changePicBorRad(hover)"
                                            :src="pictures[0]['profilePicture']"
                                    >
                                    </v-img>
                                </v-hover>
                                <div class="fill-height bottom-gradient"></div>
                            </v-flex>

                        </v-layout>
                    </v-card>

                </v-layout>
            </v-container>
        </section>

        <section>
            <v-container fluid
                         justify-space-between
                         v-if="$vuetify.breakpoint.smAndDown"
            >
                <v-layout column>
                    <v-card transition="slide-x-transition" class="mb-auto  ma-6 pa-5">

                        <v-layout row
                                  justify-space-around
                                  align-center

                        >
                            <v-flex
                                    class="text-center `d-flex justify-center xs-6`">
                                <v-card-title primary-title class="justify-center">
                                    <div>
                                        <div class="display-2">About Me</div>
                                        <v-hover>
                                            <v-img
                                                    max-width="200"

                                                    slot-scope="{hover}"
                                                    class="mx-auto ml-auto ma-auto"
                                                    :style="changePicBorRad(hover)"
                                                    :src="pictures[0]['profilePicture']"
                                            >
                                            </v-img>
                                        </v-hover>
                                        <div class="fill-height bottom-gradient"></div>
                                        <p class="text-justify">
                                            {{getTimeOfDay()}} {{aboutMe[0]['aboutMe']}}
                                        </p>
                                        <div class="caption">
                                            *Note* This website was created by me using Vue.Js and Firebase
                                        </div>
                                    </div>
                                </v-card-title>
                            </v-flex>
                            <v-flex
                                    xs3
                                    align-right
                                    layouts
                            >
                                <div class="fill-height bottom-gradient"></div>
                            </v-flex>

                        </v-layout>
                    </v-card>

                </v-layout>
            </v-container>
        </section>
        <section>
            <v-hover>
                <v-card slot-scope="{hover}" max-width="250px" elevation="0" class="transparent">
                    <v-container fluid>
                        <v-row
                                class="align-start"
                        >
                            <v-col
                                    class="display-2 text-center"
                                    cols="12"
                            >
                                Projects
                            </v-col>
                            <v-col>

                                <v-progress-linear
                                        color="#1d47e0"
                                        :indeterminate="hover ?true: false"
                                        height="6"
                                        class="rounded"
                                ></v-progress-linear>

                            </v-col>
                        </v-row>

                    </v-container>
                </v-card>
            </v-hover>
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
                                <v-card-actions>
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
                            </v-card>
                        </v-row>

                    </v-col>
                </v-row>
            </v-container>

            <v-flex
                    class="d-flex justify-space-between "
            >
                <v-hover>
                    <v-card slot-scope="{hover}" max-width="200px" elevation="0" class="transparent"
                    >
                        <v-container fluid>
                            <v-row

                            >
                                <v-col
                                        class="display-1 text-center"

                                >
                                    Education
                                </v-col>
                                <v-col>
                                    <v-progress-linear
                                            color="#1d47e0"
                                            :indeterminate="hover ?true: false"
                                            height="6"
                                            rounded
                                    ></v-progress-linear>

                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-hover>
                <v-hover>
                    <v-card slot-scope="{hover}" max-width="300px" elevation="0"
                            class="transparent"

                    >
                        <v-container>
                            <v-row
                                    class="align-content-end"
                            >
                                <v-col
                                        class="display-1 text-center"
                                        cols="12"
                                >
                                    Work Experience
                                </v-col>
                                <v-col>

                                    <v-progress-linear
                                            color="#1d47e0"
                                            :indeterminate="hover ?true: false"
                                            height="6"
                                            class="rounded"
                                    ></v-progress-linear>

                                </v-col>
                            </v-row>

                        </v-container>
                    </v-card>

                </v-hover>
            </v-flex>

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
        </section>
    </div>
</template>

<script>
    import {db} from '../firebase'

    export default {

        data: () => ({
            pictures: [],
            aboutMe: [],
            carousel: [],
            socialLinks: [],
            projects: [],
            schools: [],
            projectLinks: [],
            windowSize: {x: 0, y: 0},
            offsetTop: 0,
        }),

        components: {},
        methods: {

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
            changeColor(hover) {
                return hover ? "red" : "white"
            },
            changeColorProject(hover) {
                return hover ? "red" : "grey"
            },

            changePicBorRad(hover) {
                return hover ? "border-radius:40px" : "border-radius:80px"
            },
            onScroll() {
                this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
            },


        },
        firestore() {
            return {
                pictures: db.collection('pictures'),
                aboutMe: db.collection('aboutMe'),
                carousel: db.collection('carousel'),
                socialLinks: db.collection('socialLinks').orderBy('id'),
                schools: db.collection('schools').orderBy('id'),
                projects: db.collection('projects').orderBy('id'),
                projectLinks: db.collection('projectLinks')
            }
        },


    }
</script>
