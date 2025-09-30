<template>
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
            height="100"
            dark
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
            ><h2 class="display-2" style="color: white">{{item}}</h2>

            </v-row>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
        name: "IntroCarousel",
        props:{
            carousel: Array
        }
    }
</script>

<style scoped>

</style>
