<template>
  <div>
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
    <v-card elevation="5" v-if="searchQuery != ''">
      <v-list>
        <v-list-item-group v-model="selectedCharacter">
          <v-list-item v-for="(character, i) in results" :key="i">
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
      lastSearchQuery: "",
      searchQuery: "",
      results: null,
    };
  },
  methods: {
    async search() {
      let q = this.searchQuery;

      if (this.lastSearchQuery != this.searchQuery) {
        let url = `${location.protocol}//${location.host}/api/search/${q}`;
        console.log("fetching");
        this.lastSearchQuery = this.searchQuery;

        axios
          .get(url)
          .then((res) => {
            console.log(res.data.data);
            this.results = res.data.data.results;
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
  },
  computed: {
    selectedCharacter: {
      get() {
        return this.$store.state.selected;
      },
      set(value) {
        let character = this.results[value];
        // console.log(character);
        this.$store.commit("selectCharacter", {
          character: character,
        });
      },
    },
  },
};
</script>

<style></style>
