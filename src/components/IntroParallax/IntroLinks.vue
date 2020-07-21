<template>
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
</template>

<script>
    export default {
        name: "IntroLinks",
        props: {
            socialLinks:Array,
        },
        methods:{
            changeColor(hover) {
                return hover ? "red" : "white"
            },
        }
    }
</script>

<style scoped>

</style>
