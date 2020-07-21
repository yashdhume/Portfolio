<template>
    <v-flex>
        <p>
            {{getTimeOfDay()}} {{aboutMe}}
        </p>
        <div class="caption">
            *Note* This website was created by me using Vue.Js and Firebase
        </div>
    </v-flex>
</template>

<script>
    export default {
        name: "AboutMeDetails",
        props:{
            aboutMe: String
        },
        methods:{
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
        }
    }
</script>

<style scoped>

</style>
