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
export default {
  name: "HeroSearch",
  data: function() {
    return {
      search_query: ""
    };
  },
  methods: {
    searchLog() {
      let q = this.search_query;
      let url = `${location.protocol}//${location.host}/api/search/${q}`;
      console.log(url);
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
        .catch(err => console.error(err));
    }
  }
};
</script>

<style>
</style>
