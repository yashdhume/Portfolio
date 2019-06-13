<template>
    <div class="welcome">
        <section>
            <v-parallax
                    dark
                    src="https://wallpaperplay.com/walls/full/7/3/7/28154.jpg"
            >
                <v-layout
                        align-center
                        column
                        justify-center
                >
                    <h1 class="display-2  mb-3 font-weight-bold">Yash Dhume</h1>
                    <h4 class="subheading">Computer Science Student</h4>
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-container fluid
                         justify-space-between>
                <v-layout column>
                    <v-card>
                        <v-layout row
                                  justify-space-around
                                  align-center
                        >
                            <v-flex xs7
                                    align-center
                                    justify-center
                                    layout
                                    text-xs-straight>
                                <v-card-title primary-title  class="justify-center">
                                    <div>
                                        <div class="headline">About Me</div>
                                        <div class="body-1">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
            <v-container fluid>
            <v-timeline align-top>
                <v-timeline-item
                        v-for="(item, i) in schools"
                        :key="i"
                        :school="item.school"
                        :color="item.color"
                        :picture="item.picture"
                        :text="item.text"
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

    export default {
        data: () => ({
            schools: [
                {
                    year:"September 2017 – current",
                    school: 'Ontario Tech University',
                    color: 'blue',
                    picture: 'data:image/jpeg;base64,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',
                    text: "Relevant Completed Courses: Intro to Computer Science, Programming Workshop I and II, Computer Architecture, Data Structures, Scientific Data Analysis, Computational Science, Digital Media, Software Design and Analysis, Software Systems Development & Integration"
                },
                {
                    year: "September 2013 – June 2017",
                    school: 'St. Marcellinus S.S',
                    color: 'red',
                    picture: 'https://www.dpcdsb.org/Board%20External%20Content/SchoolLogos/MARCL.jpg',
                    text: ""
                },

            ],
            picBorRad: "border-radius:100px"
        }),
        components: {},
        methods:{
            changePicBorRad(hover){
                if(hover==true){
                    return "border-radius:40px"
                }
                else return "border-radius:80px"
            }
        }
    }
</script>
