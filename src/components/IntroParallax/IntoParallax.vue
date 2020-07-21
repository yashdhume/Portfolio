<template>
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

                <IntroCarousel :carousel="carousel[0]['carousel']"/>
                <IntroLinks :social-links="socialLinks"/>
            </v-layout>
        </v-parallax>
    </section>
</template>

<script>
    import IntroCarousel from "./IntroCarousel";
    import IntroLinks from "./IntroLinks";
    export default {
        name: "IntoParallax",
        components: {IntroLinks, IntroCarousel},
        props:{
            socialLinks: Array,
            pictures: Array,
            carousel: Array,
        },

    }
</script>

<style scoped>

</style>
