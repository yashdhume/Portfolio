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
                                            <BreadcrumbItem>
                                                <a :href="i.link">
                                                    <v-icon x-large v-on="on"
                                                            :color=changeColor(hover)>
                                                        {{i.icon}}
                                                    </v-icon>
                                                </a>
                                            </BreadcrumbItem>
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
                                        <div class="display-2">About Me</div>
                                        <div class="headline">
                                            Hi, my name is Yash Dhume and welcome to my website. I am a third-year
                                            computer science undergrad at Ontario Tech University. I have a deep passion
                                            in cutting edge technology and that excitement pushes me to learn new and
                                            innovative things. You can find me doing projects using technologies like
                                            flutter down below. Additionally, I enjoy thrill seeking adventures like
                                            rock climbing, skydiving, scuba diving. I hope you enjoy browsing my work.
                                        </div>
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
                                <v-hover>
                                    <v-img
                                            slot-scope="{hover}"
                                            class="mx-auto ml-auto ma-auto"
                                            :style="changePicBorRad(hover)"
                                            src="https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/66502408_10219485458277336_4006906446502428672_o.jpg?_nc_cat=110&_nc_oc=AQlkC6puTJhTLXTP2HBIbOWuOUHQysts8-pcjljn-dJgUOwW08uVtxRlKLQ0OMpT-yE&_nc_ht=scontent-yyz1-1.xx&oh=95c6ecc8de0b0a157bd5ad662c40feb7&oe=5DF1C1F5"
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
                                justify="center"
                        >
                            <v-card v-for="i in projects" :key="i.title" class="text-xs-center ma-3 pa-6" tile hover>
                                <v-responsive class="pt-4">
                                    <v-avatar size="150" tile class="white v-image__image--contain">
                                        <v-img :src="i.photo" contain></v-img>
                                    </v-avatar>
                                </v-responsive>
                                <v-card-text>
                                    <div class="subheading">{{ i.title }}</div>
                                    <div class="grey--text">{{ i.description }}</div>
                                </v-card-text>
                            </v-card>
                        </v-row>
                    </v-col>
                </v-row>

            </v-container>

        </section>
        <section>
            <v-flex
                    class="d-flex justify-space-between mb-6"
            >
                <v-hover>
                    <v-card slot-scope="{hover}" max-width="250px" elevation="0" class="transparent"
                            style="float: left">
                        <v-container fluid>
                            <v-row
                                    class="align-start"
                            >
                                <v-col
                                        class="display-2 text-center"
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
                <v-hover>
                    <v-card slot-scope="{hover}" max-width="250px" elevation="0"
                            class="transparent"
                            style="float: right"
                    >
                        <v-container>
                            <v-row
                                    class="align-content-end"
                            >
                                <v-col
                                        class="display-2 text-center"
                                        cols="12"
                                >
                                    Education
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
                            <v-avatar>
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
            carousel: ['Computer Science Student', 'Deck Supervisor', 'Lifeguard', 'Swim/Lifesaving Instructor', 'Teaching Assistant', 'Flutter', 'Java', 'C++', 'Mobile Development', 'Python', 'Vue.js', 'Firebase', 'Dart', 'Rock Climbing', 'Scuba Diving', 'Skydiving'],
            socialLinks: [
                {
                    title: "Github",
                    icon: "fab fa-github",
                    link: "http://www.github.com/yashdhume"
                },
                {
                    title: "Email",
                    icon: "fas fa-envelope",
                    link: "mailto:yash.dhume@gmail.com"
                }
            ],
            projects: [],
            schools: [],
            windowSize: {x: 0, y: 0},
            offsetTop: 0,
        }),

        components: {},
        methods: {
            getTimeOfDay() {
                var date = new Date();
                var time = date.getHours();
            },
            changeColor(hover) {
                return hover ? "red" : "white"
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
