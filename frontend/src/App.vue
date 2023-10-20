<template>
  <div id="app">
    <!-- header content -->
    <header></header>

    <!-- navbar -->
    <nav class="navbar navbar-light navbar-expand-lg border-bottom border-dark fixed-top" :style="{ backgroundColor: navbarBackgroundColor }">
      <div class="container-fluid align-items-center">
        <div class="row">
          <div class="col-8 leftEle">

            <!-- home page section -->
            <a href="#home" class="navbar-brand me-auto d-flex d-inline align-items-center" style="text-decoration: none; outline: none;">
              <img src="./assets/images/companyLogo.png"
              class="rounded-rect"
              width="65" 
              height="60"
              alt="">
            </a>

            <!-- about us section -->
            <a href="#about-us" class="navbar-brand border-bottom-none d-flex d-inline align-items-center" style="text-decoration: none; outline: none;">
              About Us
            </a>

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
      </div>
    </nav>

    <hr class="my-0">

    <main>
    <div>
        <!-- home page -->
        <div id="home">
          <!-- add home page content here -->

        </div>

        <!-- about us section -->
        <div id="about-us">
          <!-- add your about us content here -->

        </div>

        <!-- rendering component based on current route -->
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  import "bootstrap/dist/css/bootstrap.css"
  import "bootstrap/dist/js/bootstrap"
  import "jquery/dist/jquery.min.js"

  export default {
    name: 'App',
    computed: {
      navbarBackgroundColor() {
        const currentRoute = this.$route.path
        switch (currentRoute) {
          case "/":
            return "rgba(255, 255, 255, 0.5)"
          case "/Interactive-Maps":
            return "rgba(242, 242, 242, 0.5)"
          case "/Latest-News":
            return "rgba(230, 230, 230, 0.5)"
          case "/Get-Involved":
            return "rgba(217, 217, 217, 0.5)"
          default:
            return "rgba(255, 255, 255, 0.5)"
        }
      }
    },
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

  @font-face {
    font-family: "glacial_bold";
    src: url("~@/assets/fonts/GlacialIndifference-Bold.otf") format("opentype");
  }

  @font-face {
    font-family: "glacial";
    src: url("~@/assets/fonts/GlacialIndifference-Regular.otf") format("opentype");
  }
</style>
