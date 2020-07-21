<template>
    <v-hover>
        <v-card slot-scope="{hover}" max-width="300px" elevation="0" class="transparent">
            <v-container fluid>
                <v-row
                        class="align-start"
                >
                    <v-col
                            class="display-1 text-center"
                            cols="12"
                    >
                        {{title}}
                    </v-col>
                    <v-col>

                        <v-progress-linear
                                color="#1d47e0"
                                :indeterminate="hover ?true: false"
                                height="6"
                                class="rounded"
                        ></v-progress-linear>

                    </v-col>
                </v-row>

            </v-container>
        </v-card>
    </v-hover>
</template>

<script>
    export default {
        name: "SubTitle",
        props:{
            title: String,
        }
    }
</script>

<style scoped>

</style>
