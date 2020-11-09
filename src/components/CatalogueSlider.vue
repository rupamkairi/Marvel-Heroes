<template>
  <div>
    <p>category slider</p>
    <p>{{ message }}</p>
    <v-sheet class="mx-auto" max-width="700">
      <v-slide-group multiple show-arrows>
        <v-slide-item :v-for="comic in comics" :key="comic.id">
          <p>{{ comic.title }}</p>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CatalogueSlider",
  props: {
    collectionURI: String,
  },
  data: () => ({
    comics: null,
    events: null,
    stories: null,
    series: null,
  }),
  computed: {
    message: function() {
      this.getcomics();
      return "load more";
    },
  },
  methods: {
    getcomics() {
      let characterId = this.$store.state.selected.id;
      let url = `${location.protocol}//${location.host}/api/resource/${characterId}`;
      console.log(url);
      axios
        .get(url)
        .then((res) => {
          console.log(res.data.data);
          this.comics = res.data.data.comics.results;
          this.stories = res.data.data.stories.results;
          this.events = res.data.data.events.results;
          this.series = res.data.data.series.results;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style></style>
