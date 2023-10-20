import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // this will be removed 
  {
    path: "/",
    name: "homePage",
    component: () => import("../views/HomePage.vue")
  },
  // this will be removed
  {
    path: "/About-Us",
    name: "aboutUs",
    component: () => import("../views/AboutUsPage.vue")
  },
  {
    path: "/Interactive-Maps",
    name: "IMaps",
    component: () => import("../views/InteractiveMapPage.vue")
  },
  {
    path: "/Latest-News",
    name: "latestNews",
    component: () => import("../views/LatestNewsPage.vue")
  },
  {
    path: "/Get-Involved",
    name: "getInvolved",
    component: () => import("../views/GetInvolvedPage.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
