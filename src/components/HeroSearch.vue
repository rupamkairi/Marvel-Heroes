<template>
  <div class="px-4 py-2">
    <v-text-field
      class="headline red--text font-weight-medium"
      color="red"
      clearable
      solo
      dark
      single-line
      label="Search for Hero"
      v-model.lazy="searchQuery"
      @change="search"
    ></v-text-field>
    <v-card elevation="5">
      <v-list>
        <v-list-item-group v-model="selectedCharacter">
          <v-list-item class="px-4" v-for="(character, i) in results" :key="i">
            <v-list-item-avatar>
              <v-img
                :src="
                  `${character.thumbnail.path}/standard_small.${character.thumbnail.extension}`
                "
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title
                class="headline red--text font-weight-bold"
                v-text="character.name"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HeroSearch",
  data: function() {
    return {
      searchQuery: "",
      results: null,
      selectedCharacter: null,
    };
  },
  methods: {
    async search() {
      let q = this.searchQuery;
      let url = `${location.protocol}//${location.host}/api/search/${q}`;
      console.log("fetching");

      axios
        .get(url)
        .then((res) => {
          console.log(res.data.data);
          this.results = res.data.data.results;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

<style></style>
