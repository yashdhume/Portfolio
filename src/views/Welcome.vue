<template>
    <div class="welcome">
        <IntoParallax :carousel="carousel" :pictures="pictures" :social-links="socialLinks"/>
      <vs-row justify="center">
        <AboutMe :about-me="aboutMe" :pictures="pictures"/>
        <Technologies :technologies="technologies" style="margin: 1rem"/>
      </vs-row>
        <SubTitle title="Projects"/>
        <Projects :projects="projects"/>
        <v-row class="justify-space-around" style="padding: 1rem">
            <SubTitle title="Education"/>
            <SubTitle  title="Work Experience"/>
        </v-row>
        <WorkEducation :schools="schools"/>
    </div>
</template>

<script>
    import {db} from '../firebase'
    import IntoParallax from "../components/IntroParallax/IntoParallax";
    import AboutMe from "../components/AboutMe/AboutMe";
    import SubTitle from "../components/miscellaneous/SubTitle";
    import Projects from "../components/Projects/Projects";
    import WorkEducation from "../components/WorkEducation/WorkEducation";
    import Technologies from "../components/Technologies/Technologies";

    export default {

        data: () => ({
            pictures: [],
            aboutMe: [],
            carousel: [],
            socialLinks: [],
            projects: [],
            schools: [],
            projectLinks: [],
            technologies: [],
            windowSize: {x: 0, y: 0},
            offsetTop: 0,
        }),

        components: {Technologies, WorkEducation, Projects, SubTitle, AboutMe, IntoParallax},
        methods: {


        },
        firestore() {
            return {
                pictures: db.collection('pictures'),
                aboutMe: db.collection('aboutMe'),
                carousel: db.collection('carousel'),
                socialLinks: db.collection('socialLinks').orderBy('id'),
                schools: db.collection('schools').orderBy('id'),
                projects: db.collection('projects').orderBy('id'),
                projectLinks: db.collection('projectLinks'),
                technologies: db.collection('technologies').orderBy('id')
            }
        },


    }
</script>
