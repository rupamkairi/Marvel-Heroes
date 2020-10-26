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
    collectionOf: {
      type: String,
    },
  },
  data: () => ({
    results: null,
  }),
  computed: {
    message() {
      this.getData();
      return `loaded ${this.collectionOf}.`;
    },
  },
  methods: {
    async getData() {
      console.log(
        `fetching ${this.collectionOf} for ${this.$store.state.selected.id}.`
      );

      let url = `${location.protocol}//${location.host}/api/character/${this.$store.state.selected.id}`;
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
