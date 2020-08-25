<template>
  <v-app app>
    <v-app-bar app dark>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <span class="text-h3 red--text font-weight-black">MARVEL HEROES</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main app>
      <v-container fluid>
        <v-row>
          <v-col cols="4">
            <HeroSearch/>
          </v-col>
          <v-col cols="8">
            <HeroDescription/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
  <!-- <vue-router></vue-router> -->
</template>

<script>
import HeroSearch from "./components/HeroSearch";
import HeroDescription from "./components/HeroDescription";
export default {
  name: "App",
  components: {
    HeroSearch,
    HeroDescription
  }
};
</script>

<style>
</style>

