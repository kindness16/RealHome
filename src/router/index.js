import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import '../assets/styles/style.scss'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/property",
    name: "Property",
    component: () =>
      import(/* webpackChunkName: "property" */ "../views/Property.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () =>
      import(/* webpackChunkName: "property" */ "../views/Blog.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () =>
      import(/* webpackChunkName: "property" */ "../views/Contacts.vue"),
  },
  {
    path: "/signIn",
    name: "Sign In",
    component: () =>
      import(/* webpackChunkName: "property" */ "../views/SignIn.vue"),
  },
  {
    path: "/forum",
    name: "Forum",
    component: () =>
      import(/* webpackChunkName: "property" */ "../views/Forum.vue"),
  },
  {
    path: "/promotions",
    name: "Promotions",
    component: () =>
      import(/* webpackChunkName: "property" */ "../views/Promotions.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () =>
      import(/* webpackChunkName: "property" */ "../views/News.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
