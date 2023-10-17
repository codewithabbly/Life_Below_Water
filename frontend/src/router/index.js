import { createRouter, createWebHistory } from "vue-router";
import GetInvolvedPage from "../views/GetInvolvedPage.vue";

const routes = [
  // for testing purposes, do change this directory to the file which you are going to edit on in the views directory
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/involved",
    name: "GetInvolvedPage",
    component: GetInvolvedPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
