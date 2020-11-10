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
      <v-col>
        <p class="display-1 font-weight-bold">Comics</p>
        <CatalogueSlider catelogueOf="comics" />
      </v-col>

      <v-col>
        <p class="display-1 font-weight-bold">Events</p>
        <CatalogueSlider catelogueOf="events" />
      </v-col>
      <v-col>
        <p class="display-1 font-weight-bold">Series</p>
        <CatalogueSlider catelogueOf="series" />
      </v-col>
      <!-- <v-col>
        <p class="display-1 font-weight-bold">Stories</p>
        <CatalogueSlider catelogueOf="stories" />
      </v-col> -->
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
