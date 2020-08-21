<template>
  <div id="hero-description-field-id">hero description</div>
</template>

<script>
export default {
  name: "HeroDescription",
  data: function() {
    return {
      search_query: ""
    };
  },
  methods: {
    searchLog: function(query) {
      console.log(query);
    }
  }
};
</script>

<style>
</style>
