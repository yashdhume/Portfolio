<template>
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
                                    type="text"
                                    v-clipboard:copy="meme(model)"
                            ></v-text-field>
                            <div class="mt-12 text-center">
                                {{  meme(model) }}
                            </div>
                            <v-button @click.stop="snackbar=true" v-clipboard:copy="meme(model)"> <v-icon>far fa-copy</v-icon></v-button>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <v-snackbar
                v-model="snackbar"
        >
            Copied to Clipboard

            <template v-slot:action="{ attrs }">
                <v-btn
                        color="pink"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<script>
    export default {


        name: "memeText",
        data: () => ({
            model: '',
            snackbar: false,
        }),
        mounted() {
            this.model=this.$route.query.text;
        },
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
        },
    }
</script>

<style scoped>

</style>
