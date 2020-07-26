<template>
    <v-hover v-slot:default="{ hover }">
        <v-btn x-large dark icon>
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <a :href="link" style="text-decoration:none">
                        <v-icon x-large v-on="on"
                                :color=changeColor(hover)>
                            {{icon}}
                        </v-icon>
                    </a>
                </template>
                <span>{{title}}</span></v-tooltip>
        </v-btn>
    </v-hover>
</template>

<script>
    export default {
        name: "IconsWithTooltip",
        props:{
            icon: String,
            title: String,
            link: String,
            color: String,
            baseColor: String,
        },
        methods:{
            changeColor(hover) {
                return hover ? this.color : this.baseColor
            },
        }
    }
</script>

<style scoped>

</style>
