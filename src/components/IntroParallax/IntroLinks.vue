<template>
    <v-column>
        <v-column v-for="i in socialLinks" :key="i.title">
            <IconsWithTooltip :title="i.title" :icon="i.icon" :color="i.color" :link="i.link" baseColor="white"/>
        </v-column>
    </v-column>
</template>

<script>
    import IconsWithTooltip from "../miscellaneous/IconsWithTooltip";
    export default {
        name: "IntroLinks",
        components: {IconsWithTooltip},
        props: {
            socialLinks:Array,
        },
    }
</script>

<style scoped>

</style>
