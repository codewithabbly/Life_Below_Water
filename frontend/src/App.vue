<template>
  <div id="app">
    <!-- header content -->
    <header></header>

    <!-- navbar -->
    <nav
      class="navbar navbar-light navbar-expand-lg fixed-top"
      :style="{ backgroundColor: navbarBackgroundColor }"
    >
      <div class="container-fluid align-items-center">
        <div class="row">
          <div class="col-8 leftEle">
            <!-- home page section -->
            <router-link :to="{ name: 'homePage' }">
              <a
                href="./views/HomePage.vue"
                class="navbar-brand me-auto d-flex d-inline align-items-center"
              >
                <img
                  src="./assets/images/ourLogo.png"
                  class="rounded-rect"
                  width="45"
                  height="30"
                  alt=""
                />
              </a>
            </router-link>

            <!-- about us section -->
<<<<<<< Updated upstream
            <a
              href="#about-us"
              class="navbar-brand border-bottom-none d-flex d-inline align-items-center"
              style="text-decoration: none; outline: none"
            >
=======
            <a href="#about-us" class="navbar-brand hover-underline-animation border-bottom-none d-flex d-inline align-items-center" style="text-decoration: none; outline: none;">
>>>>>>> Stashed changes
              About Us
            </a>

            <!-- map page -->
            <router-link :to="{ name: 'IMaps' }">
<<<<<<< Updated upstream
              <a
                href="./views/InteractiveMapPage.vue"
                class="navbar-brand border-bottom-none d-flex d-inline align-items-center"
              >
=======
              <a href="./views/InteractiveMapPage.vue" class="navbar-brand hover-underline-animation border-bottom-none d-flex d-inline align-items-center">
>>>>>>> Stashed changes
                Interactive Map
              </a>
            </router-link>

            <!-- latest news page -->
            <router-link :to="{ name: 'latestNews' }">
<<<<<<< Updated upstream
              <a
                href="./views/LatestNewsPage.vue"
                class="navbar-brand border-bottom-none d-flex d-inline align-items-center"
              >
=======
              <a href="./views/LatestNewsPage.vue" class="navbar-brand hover-underline-animation border-bottom-none d-flex d-inline align-items-center">
>>>>>>> Stashed changes
                Latest News
              </a>
            </router-link>

            <!-- get involved page -->
            <router-link :to="{ name: 'getInvolved' }">
<<<<<<< Updated upstream
              <a
                href="./views/GetInvolvedPage.vue"
                class="navbar-brand border-bottom-none d-flex d-inline align-items-center"
              >
=======
              <a href="./views/GetInvolvedPage.vue" class="navbar-brand hover-underline-animation border-bottom-none d-flex d-inline align-items-center">
>>>>>>> Stashed changes
                Get Involved
              </a>
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <hr class="my-0" />
    <!-- <hr class="my-0"> -->

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

export default {
  name: "App",
  computed: {
    navbarBackgroundColor() {
      const currentRoute = this.$route.path;
      switch (currentRoute) {
        case "/":
          return "transparent";
        case "/Interactive-Maps":
          return "#5085A5";
        case "/Latest-News":
          return "transparent";
        case "/Get-Involved":
          return "transparent";
        default:
          return "transparent";
      }
    },
  },
};
</script>

<style>
.navbar-brand {
  font-family: "glacial", sans-serif;
  font-size: 20px;
  color: white;
  text-decoration: none !important;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  text-decoration: none;
  outline: none;
}

.border-bottom-none {
  border-bottom: none !important;
}

.leftEle a {
  text-decoration: none;
}

<<<<<<< Updated upstream
.leftEle a:hover {
  color: #023047;
}

.leftEle a:active {
  color: #023047;
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
=======
  .main-content {
    margin-top: 1rem;
  }
>>>>>>> Stashed changes

@font-face {
  font-family: "glacial_bold";
  src: url("~@/assets/fonts/GlacialIndifference-Bold.otf") format("opentype");
}

<<<<<<< Updated upstream
@font-face {
  font-family: "glacial";
  src: url("~@/assets/fonts/GlacialIndifference-Regular.otf") format("opentype");
}
=======
  .leftEle a {
    text-decoration: none;
  }

  .leftEle a:hover {
    color: black;
  }

  .leftEle a:active {
    color: black;
  }

  .hover-underline-animation:hover {
    cursor:pointer;
  }

  .hover-underline-animation {
    display: inline-block;
    position: relative;
  }

  .hover-underline-animation::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000000;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .hover-underline-animation:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @font-face {
    font-family: "glacial_bold";
    src: url("~@/assets/fonts/GlacialIndifference-Bold.otf") format("opentype");
  }

  @font-face {
    font-family: "glacial";
    src: url("~@/assets/fonts/GlacialIndifference-Regular.otf") format("opentype");
  }
>>>>>>> Stashed changes
</style>
