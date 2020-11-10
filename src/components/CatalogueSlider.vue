<template>
  <v-sheet max-width="100%">
    <p>{{ getresults() }}</p>
    <v-slide-group multiple show-arrows>
      <v-slide-item v-for="result in results" :key="result.id">
        <v-row class="fill-height" align="center" justify="center">
          <v-sheet class="px-4">
            <v-card width="100" height="150">
              <v-img
                :src="
                  `${result.thumbnail.path}/portrait_medium.${result.thumbnail.extension}`
                "
              ></v-img>
            </v-card>
            <span
              class="red--text d-inline-block text-truncate"
              style="max-width: 100px;"
              >{{ result.title }}</span
            >
          </v-sheet>
        </v-row>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import axios from "axios";

export default {
  name: "CatalogueSlider",
  props: {
    catelogueOf: String,
  },
  data: () => ({
    characterId: null,
    results: null,
  }),
  methods: {
    getresults() {
      let characterId = this.$store.state.selected.id;

      if (characterId != this.characterId) {
        this.characterId = characterId;
        let url = `${location.protocol}//${location.host}/api/resource/${characterId}`;
        console.log(
          `fetching ${this.catelogueOf} for ${characterId} from ${url}`
        );
        axios
          .get(url)
          .then((res) => {
            console.log(res.data.data[this.catelogueOf].results);
            this.results = res.data.data[this.catelogueOf].results;
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
  },
  computed: {},
};
</script>

<style></style>
