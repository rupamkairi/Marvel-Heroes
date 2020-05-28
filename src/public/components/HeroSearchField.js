/*
Vue.component(name, {
	template,
	props,
	data,
	methods ..
})
*/

var _template = `<div id="hero-search-field-id">

  <v-text-field
    class="pa-4 headline font-weight-medium"
    color="red"
    clearable
    solo
    dark
    single-line
    label="Search for Hero"
  ></v-text-field>

</div>`;

Vue.component("hero-search-field", {
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
