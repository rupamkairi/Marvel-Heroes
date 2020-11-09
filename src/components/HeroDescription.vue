<template>
  <div>
    <v-row>
      <v-col cols="4" lg="3" xl="2">
        <v-card elevation="10">
          <v-img
            :src="
              `${this.$store.state.selected.thumbnail.path}/portrait_xlarge.${this.$store.state.selected.thumbnail.extension}`
            "
          ></v-img>
        </v-card>
      </v-col>
      <v-col cols="8" lg="9" xl="10">
        <p class="display-3 font-weight-black">
          {{ this.$store.state.selected.name }}
        </p>
        <p class="body-1 red--text font-weight-medium">
          {{ this.$store.state.selected.description }}
        </p>
      </v-col>
    </v-row>
    <div class="pl-3">
      <v-row>
        <p class="display-1 font-weight-bold">Comics</p>
        <v-col>
          <CatalogueSlider
            :collectionURI="
              `${this.$store.state.selected.comics.collectionURI}`
            "
          ></CatalogueSlider>
        </v-col>
      </v-row>
      <!-- <v-row>
        <p class="display-1 font-weight-bold">Events</p>
        <v-col>
          <CatalogueSlider collectionOf="events" />
        </v-col>
      </v-row>
      <v-row>
        <p class="display-1 font-weight-bold">Series</p>
        <v-col>
          <CatalogueSlider collectionOf="series" />
        </v-col>
      </v-row>
      <v-row>
        <p class="display-1 font-weight-bold">Stories</p>
        <v-col>
          <CatalogueSlider collectionOf="stories" />
        </v-col>
      </v-row> -->
    </div>
  </div>
</template>

<script>
import CatalogueSlider from "@/components/CatalogueSlider";
export default {
  name: "HeroDescription",
  components: {
    CatalogueSlider,
  },
  data: function() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
