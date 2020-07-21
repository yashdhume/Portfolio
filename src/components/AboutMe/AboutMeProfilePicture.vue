<template>
    <v-flex
            :class="size"
    >
        <v-hover>
            <v-img
                    slot-scope="{hover}"
                    class="mx-auto ml-auto ma-auto"
                    :style="changePicBorRad(hover)"
                    :src="picture"
            >
            </v-img>
        </v-hover>
    </v-flex>
</template>

<script>
    export default {
        name: "AboutMeProfilePicture",
        props: {
            picture: String,
            size: String,
        },
        methods:{
            changePicBorRad(hover) {
                return hover ? "border-radius:40px" : "border-radius:80px"
            },
        }
    }
</script>

<style scoped>

</style>
