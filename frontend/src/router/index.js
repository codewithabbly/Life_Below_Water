import { createRouter, createWebHistory } from 'vue-router'

const routes = [
      // for testing purposes, do change this directory to the file which you are going to edit on in the views directory
      {
            path: "/",
            name: "Home",
            component: () => import("../views/HomePage.vue")
      },
      {
            path: "/home", // Add this route
            name: "homePage",
            component: () => import('../views/HomePage.vue')
      },
      {
      path: "/LatestNewsPage", // Add this route
      name: "LatestNewsPage",
      component: () => import('../views/LatestNewsPage.vue')
      }
]

const router = createRouter(
      {
            history: createWebHistory(process.env.BASE_URL),
            routes
      }
)

export default router
