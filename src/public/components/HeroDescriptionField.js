var _template = `<div id="hero-description-field-id">
hero description
</div>`;

Vue.component("hero-description-field", {
  template: _template,
  props: [],
  data: function () {
    return {
      search_query: "",
    };
  },
  methods: {
    searchLog: function (query) {
      console.log(query);
    },
  },
});
