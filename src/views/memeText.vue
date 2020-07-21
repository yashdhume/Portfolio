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
                                                type="text"
                                                v-clipboard:copy="model"
                                        ></v-text-field>
                                        <div class="mt-12 text-center">
                                            {{  getText(model) }}
                                        </div>
<!--                                        <v-button :v-clipboard="getText(model) "> <v-icon>far fa-copy</v-icon></v-button>-->

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

            getParameterByName: function(name, url) {
                if (!url) url = window.location.href;
              // eslint-disable-next-line no-useless-escape
                name = name.replace(/[\[\]]/g, '\\$&');
                var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return decodeURIComponent(results[2].replace(/\+/g, ' '));
            },
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
            getQuery() {
                let par = this.getParameterByName('memeText').toString();
                return this.meme(par);
            },
          getText(s){
              if(s.length===0){
                return this.getQuery()
              }
              else return this.meme(s);
          }


        },
        beforeMount() {
            window.location.href ="https://yashdhume.com/memeText?memeText="
        }
    }
</script>

<style scoped>

</style>