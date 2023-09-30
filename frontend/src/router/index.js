import { createRouter, createWebHistory } from 'vue-router'

const routes = [
      // for testing purposes, do change this directory to the file which you are going to edit on in the views directory
      {
            path: "/",
            name: "home",
            component: () => import("../views/HomePage.vue")
      },
]

const router = createRouter(
      {
            history: createWebHistory(process.env.BASE_URL),
            routes
      }
)

export default router
