<template>
  <div id="hero-search-field-id" @change="searchLog">
    <v-text-field
      class="pa-4 headline font-weight-medium"
      color="red"
      clearable
      solo
      dark
      single-line
      label="Search for Hero"
      v-model.lazy="search_query"
    ></v-text-field>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HeroSearch",
  data: function() {
    return {
      search_query: "",
      results: null
    };
  },
  methods: {
    async searchLog() {
      let q = this.search_query;
      let url = `${location.protocol}//${location.host}/api/search/${q}`;
      console.log("fetching");

      axios
        .get(url)
        .then(res => {
          console.log(res.data);
          this.results = res.data.results;
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  mounted() {
    console.log("mounted");
  }
};
</script>

<style></style>
