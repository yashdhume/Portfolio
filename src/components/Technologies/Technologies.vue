<template>
    <v-card  class="mb-auto  ma-6 pa-5">
        <v-container fill-height>
            <v-col align="center"
                   justify="center">
                <v-row align="center" justify="center">
                    <div v-for="i in technologies" :key="i">
                        <IconsWithTooltip :title="i.title" :icon="i.icon" :color="i.color" base-color="grey"/>
                    </div>
                </v-row>
            </v-col>
        </v-container>
    </v-card>
</template>

<script>
    import IconsWithTooltip from "../miscellaneous/IconsWithTooltip";
    export default {
        name: "Technologies",
        props: {
            technologies: Array
        },
        components: {IconsWithTooltip}
    }
</script>

<style scoped>

</style>
