<template>
    <div id="app">
        <v-app id="inspire">
            <v-content>
                <v-container
                        fluid
                        fill-height
                >
                    <v-layout
                            align-center
                            justify-center
                    >
                        <v-flex
                                xs12
                                sm8
                                md4
                        >
                            <v-card class="elevation-12">
                                <v-toolbar
                                        color="red"
                                        dark
                                        flat
                                >
                                    <v-toolbar-title>Meme Text</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                </v-toolbar>
                                <v-card-text>
                                    <v-form>
                                        <v-text-field
                                                v-model="model"
                                                label="Enter your text to meme"
                                                name="memeText"
                                                prepend-icon="mdiText"
                                                type="text"
                                        ></v-text-field>


                                        <div class="mt-12 text-center">
                                            {{ meme(model) }}
                                        </div>
                                    </v-form>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>
    export default {
        name: "memeText",
        data: () => ({
            model: '',
        }),
        methods: {
            meme(s) {
                var memeText = "";
                for (var i = 0; i < s.length; i++) {
                    if (i % 2 === 0) {
                        memeText += s.substring(i, i + 1).toUpperCase();
                    } else {
                        memeText += s.substring(i, i + 1).toLowerCase();
                    }
                }
                return memeText;
            },
        }
    }
</script>

<style scoped>

</style>