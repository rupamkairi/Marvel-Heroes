/*
Vue.component(name, {
	template,
	props,
	data,
	methods ..
})
*/

var searchField_template = `<div id="search-field-id">
	<v-text-field 
		filled outlined
		label="Search" 
		id="search_id" 
		v-model="search_query"
		@change="searchLog(search_query)">
	</v-text-field>
</div>`;

Vue.component("search-field", {
  template: searchField_template,
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
