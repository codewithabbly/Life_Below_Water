<template>
  <div id="app">
    <!-- header content -->
    <header></header>

    <!-- navbar -->
    <nav class="navbar border-bottom fixed-top">
      <div class="container-fluid align-items-center">
        <!-- home page -->
        <router-link: to="{ name: 'homepage' }">
          <a href="./views/HomePage.vue" class="navbar-brand me-auto">
            <img
              src="./assets/companyLogo.png"
              class="rounded-rect"
              width="60"
              height="40"
              alt=""
            />
          </a>
        </router-link:>

        <div class="d-flex gap-5">
          <!-- about us page -->
          <router-link to="{ name: 'aboutus' }">
            <a
              href="./views/AboutUsPage.vue"
              class="navbar-brand border-bottom-none"
            >
              About Us
            </a>
          </router-link>

          <!-- map page -->
          <router-link to="{ name: 'interactivemap' }">
            <a
              href="./views/InteractiveMapPage.vue"
              class="navbar-brand text-decoration-none"
            >
              Interactive Map
            </a>
          </router-link>

          <!-- latest news page -->
          <router-link to="{ name: 'latestnews' }">
            <a
              href="./views/LatestNewsPage.vue"
              class="navbar-brand text-decoration-none"
            >
              Latest News
            </a>
          </router-link>

          <!-- community forum page -->
          <router-link to="{ name: 'communityforum' }">
            <a
              href="./views/CommunityForumPage.vue"
              class="navbar-brand text-decoration-none"
            >
              Community Forum
            </a>
          </router-link>

          <!-- get involved page -->
          <router-link to="/involved">
            <a
              href="./views/GetInvolvedPage.vue"
              class="navbar-brand text-decoration-none"
            >
              Get Involved
            </a>
          </router-link>

          <!-- profile icon -->
          <a href="./views/ProfilePage.vue" class="navbar-brand">
            <img
              src="./assets/profileIcon.png"
              class="rounded-rect"
              width="40"
              height="40"
              alt=""
            />
          </a>
        </div>
      </div>
    </nav>

    <main>
      <div>
        <!-- rendering component based on current route -->
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "jquery/dist/jquery.min.js";
import { createRouter, createWebHistory } from "vue-router";

export default {
  name: "App",
  router: createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
      {
        path: "/",
        name: "home",
        // for testing purposes, do change this directory to the file which you are going to edit on in the views directory
        component: () => import("./views/HomePage.vue"),
      },
    ],
  }),
};
</script>

<style>
.navbar-brand {
  font-family: "glacial", sans-serif;
  font-size: 20px;
  color: #000000;
  text-decoration: none !important;
  display: flex;
  justify-content: center; /* Horizontally center the items */
  align-items: center; /* Vertically center the items */
  vertical-align: middle;
}

.navbar {
  background-color: transparent !important;
}

.border-bottom-none {
  border-bottom: none !important;
}
</style>
