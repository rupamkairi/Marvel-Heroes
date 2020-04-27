let routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

let router = new VueRouter({
  mode: "history",
  base: "/#/",
  routes: routes,
});
