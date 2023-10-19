<template>
  <div id="app">

    <!-- header content -->
    <header>

    </header>

    <!-- navbar -->
    <nav class="navbar navbar-light navbar-expand-lg border-bottom border-dark fixed-top" :style="{ backgroundColor: navbarBackgroundColor }">
      <div class="container-fluid align-items-center">
        <div class="row">
          <div class="col-8 leftEle">
            <!-- home page -->
            <router-link :to="{ name: 'homePage' }">
              <a href="./views/HomePage.vue" class="navbar-brand me-auto d-flex d-inline align-items-center" style="text-decoration: none; outline: none;">
                <img src="./assets/companyLogo.png"
                class="rounded-rect"
                width="60" 
                height="40"
                alt="">
              </a>
            </router-link>
            
            <!-- about us page -->
            <router-link :to="{ name: 'aboutUs' }">
              <a href="./views/AboutUsPage.vue" class="navbar-brand border-bottom-none d-flex d-inline align-items-center" style="text-decoration: none; outline: none;">
                About Us
              </a>
            </router-link>
    
            <!-- map page -->
            <router-link :to="{ name: 'IMaps' }">
              <a href="./views/InteractiveMapPage.vue" class="navbar-brand border-bottom-none d-flex d-inline align-items-center" style="text-decoration: none; outline: none;">
                Interactive Map
              </a>
            </router-link>
    
            <!-- latest news page -->
            <router-link :to="{ name: 'latestNews' }">
              <a href="./views/LatestNewsPage.vue" class="navbar-brand border-bottom-none d-flex d-inline align-items-center" style="text-decoration: none; outline: none;">
                Latest News
              </a>
            </router-link>
    
            <!-- get involved page -->
            <router-link :to="{ name: 'getInvolved' }">
              <a href="./views/GetInvolvedPage.vue" class="navbar-brand border-bottom-none d-flex d-inline align-items-center" style="text-decoration: none; outline: none;">
                Get Involved
              </a>
            </router-link>
          </div>
        </div>

        <!-- <div class="d-flex gap-5">
          <a href="./views/ProfilePage.vue" class="navbar-brand">
            <img src="./assets/profileIcon.png"
            class="rounded-rect"
            width="40" 
            height="40"
            alt="">
          </a>
        </div> -->
      </div>
    </nav>

    <hr class="my-0">

    <main>
      <div>
        <!-- rendering component based on current route -->
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap/dist/js/bootstrap'
  import 'jquery/dist/jquery.min.js'
  import { createRouter, createWebHistory } from 'vue-router'

  export default {
    name: 'App',
    computed: {
    navbarBackgroundColor() {
      const currentRoute = this.$route.path;
      switch (currentRoute) {
        case "/":
          return "rgba(255, 255, 255, 0.5)";
        case "/Interactive-Maps":
          return "rgba(242, 242, 242, 0.5)";
        case "/Latest-News":
          return "rgba(230, 230, 230, 0.5)";
        case "/Get-Involved":
          return "rgba(217, 217, 217, 0.5)";
        default:
          return "rgba(255, 255, 255, 0.5)";
      }
    }
  },
    router: createRouter (
      {
        history: createWebHistory(process.env.BASE_URL),
        routes: [
          {
            path: "/",
            name: "IMaps",
            component: () => import('./views/InteractiveMapPage.vue')
          }
        ]
      }
    )
  }
</script>

<style>
  .navbar-brand {
    font-family: 'glacial', sans-serif;
    font-size: 20px;
    color: #000000;
    text-decoration: none !important;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    text-decoration: none;
    outline: none;
  }

  .navbar {
    background-color: white;
  }

  .border-bottom-none {
    border-bottom: none !important;
  }

  .main-content {
    margin-top: 1rem;
  }

  .leftEle {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    vertical-align: middle;
    gap: 3rem;
  }
</style>
