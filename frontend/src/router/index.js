import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "homePage",
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/Interactive-Maps",
    name: "IMaps",
    component: () => import("../views/InteractiveMapPage.vue"),
  },
  {
    path: "/Latest-News",
    name: "latestNews",
    component: () => import("../views/LatestNewsPage.vue"),
  },
  {
    path: "/Get-Involved",
    name: "getInvolved",
    component: () => import("../views/GetInvolvedPage.vue"),
  },
  {
    path: "/Get-Involved/Donate",
    name: "gIDonate",
    component: () => import("../views/DonateGetInvolvedPage.vue"),
  },
  {
    path: "/Get-Involved/Volunteer",
    name: "gIVolunteer",
    component: () => import("../views/VolunteerGetInvolvedPage.vue"),
  },
  {
    path: "/Personality-Test",
    name: "personalityTest",
    component: () => import("../views/PersonalityTest.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
