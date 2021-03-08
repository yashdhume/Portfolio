<template>
    <v-hover>
        <v-card slot-scope="{hover}" max-width="300px" elevation="0" class="transparent">
            <v-container fluid>
                <v-row
                        class="align-start"
                >
                    <v-col
                            class="text-center"
                            cols="12"
                    >
                      <h4 v-if="$vuetify.breakpoint.smAndDown">{{title}}</h4>
                      <h2 v-else>{{title}}</h2>
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
