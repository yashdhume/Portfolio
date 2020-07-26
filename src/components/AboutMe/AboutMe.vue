<template>
    <v-card class="mb-auto  ma-6 pa-5">
        <v-container fill-height fluid>
            <v-card-actions  class="justify-center" style="flex-direction: column" v-if="$vuetify.breakpoint.smAndDown">
                <div class="display-3">About Me</div>
                <AboutMeProfilePicture  size="xs7" class="justify-center" style="padding: 1rem" :picture="pictures[0]['profilePicture']"/>
                <AboutMeDetails :about-me="aboutMe[0]['aboutMe']"/>
            </v-card-actions>
            <div v-else>
                <div class="display-2 text-center">About Me</div>
                <v-card-actions class="justify-center" >
                    <AboutMeDetails :about-me="aboutMe[0]['aboutMe']"/>
                    <AboutMeProfilePicture  size="xs4" class="justify-center" style="padding: 1rem" :picture="pictures[0]['profilePicture']"/>
                </v-card-actions>
            </div>
        </v-container>
    </v-card>
</template>

<script>
    import AboutMeDetails from "./AboutMeDetails";
    import AboutMeProfilePicture from "./AboutMeProfilePicture";
    export default {
        name: "AboutMe",
        components: {AboutMeProfilePicture, AboutMeDetails},
        props:{
            pictures: Array,
            aboutMe: Array,
        },
        methods:{


        }
    }
</script>

<style scoped>

</style>
