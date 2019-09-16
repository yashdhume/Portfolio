<template>
    <div class="welcome" v-scroll="onScroll">
        <section>
            <v-parallax
                    dark
                    height="1000"
                    src="https://i.pinimg.com/originals/a3/c5/51/a3c551e479885ccdbe04d4f31b1f425e.jpg"
                    jumbotron
            >

                <v-layout
                        justify-center
                        align-center
                        column
                >
                    <p class="display-4  text-sm-center">Yash Dhume</p>

                    <v-carousel
                            class="elevation-0"
                            cycle
                            interval="2000"
                            hide-controls
                            hide-delimiters
                            hide-delimiter-background
                            elevation="0"
                            touchless
                            progress
                            vertical
                            height="auto"
                            dark
                            continous
                    >
                        <v-carousel-item
                                cycle
                                v-for="(item, i) in carousel"
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
                                            <v-icon x-large v-on="on" :color=changeColor(hover)>{{i.icon}}</v-icon>
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
                         justify-space-between>
                <v-layout column>
                    <v-card transition="slide-x-transition">

                        <v-layout row
                                  justify-space-around
                                  align-center
                        >
                            <v-flex xs7
                                    align-center
                                    justify-center
                                    layout
                                    text-xs-straight>
                                <v-card-title primary-title class="justify-center">
                                    <div>
                                        <div class="headline">About Me</div>
                                        <div class="body-1">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </div>
                                    </div>
                                </v-card-title>
                            </v-flex>
                            <v-flex
                                    xs3
                                    align-right
                                    layouts
                            >
                                <v-hover>
                                    <v-img
                                            size="80px"
                                            slot-scope="{hover}"
                                            class="mx-auto"
                                            :style="changePicBorRad(hover)"
                                            src="https://pbs.twimg.com/profile_images/3649535578/c2cd125113ddc58b89c2893cac2408c2_400x400.jpeg"
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
            <v-container fluid class="mx-auto">
                <v-layout
                        row flex
                        align-center
                        justify-center
                >
                    <v-flex xs12 sm6 md4 lg3 v-for="i in projects" :key="i.title">
                        <v-card class="text-xs-center ma-3" hover>
                            <v-responsive class="pt-4">
                                <v-avatar size="100" class="grey lighten-2 v-image__image--contain">
                                    <img :src="i.photo">
                                </v-avatar>
                            </v-responsive>
                            <v-card-text>
                                <div class="subheading">{{ i.title }}</div>
                                <div class="grey--text">{{ i.description }}</div>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>

            </v-container>
        </section>
        <section>
            <v-container fluid>
                <v-timeline align-top>
                    <v-timeline-item
                            v-for="(item, i) in schools"  :key="i"
                            fill-dot
                    >
                        <template v-slot:icon>
                            <v-avatar  >
                                <img v-bind:src="item.picture">
                            </v-avatar>
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
            carousel: ['Computer Science Student', 'Lifeguard', 'Teaching Assistant', 'Flutter', 'Java', 'C++', 'Mobile Development', 'Python', 'Vue.js', 'Firebase', 'Dart'],
            socialLinks: [
                {
                    title: "Github",
                    icon: "fab fa-github",
                    link: "www.github.com/yashdhume"
                },
                {
                    title: "Email",
                    icon: "fas fa-envelope",
                    link: "www.github.com/yashdhume"
                }
            ],
            projects: [],
            schools: [],
            windowSize: {x: 0, y: 0},
            offsetTop: 0,
        }),

        components: {},
        methods: {
            changeColor(hover) {
                return hover ? "red" : ""
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
                schools: db.collection('schools').orderBy('id'),
                projects: db.collection('projects').orderBy('id')
            }
        },


    }
</script>
