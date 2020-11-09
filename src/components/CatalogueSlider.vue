<template>
  <v-sheet class="mx-auto" max-width="700">
    <v-slide-group multiple show-arrows>
      <v-slide-item>
        <p>{{ message }}</p>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import axios from "axios";

export default {
  name: "CatalogueSlider",
  props: {
    collectionURI: String,
  },
  data: () => ({
    results: null,
  }),
  computed: {
    message() {
      this.getData();
      return `loaded ${this.collectionURI}.`;
    },
  },
  methods: {
    async getData() {
      console.log(
        `fetching ${this.collectionURI} for ${this.$store.state.selected.id}.`
      );

      let url = `${location.protocol}//${location.host}/api/requestPage/${this.collectionURI}`;
      console.log(url);
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
};
</script>

<style></style>
