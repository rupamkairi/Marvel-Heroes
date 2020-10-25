<template>
  <v-sheet class="mx-auto" max-width="700">
    <v-slide-group multiple show-arrows>
      <v-slide-item> </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  name: "CatalogueSlider",
  props: {
    itemsObject: Object,
  },
  data: () => ({}),
};
</script>

<style></style>
