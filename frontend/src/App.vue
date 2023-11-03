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
            <a
              href="#about-us"
              class="navbar-brand border-bottom-none hover-underline-animation d-flex d-inline align-items-center"
              style="text-decoration: none; outline: none"
            >
              About Us
            </a>

            <!-- map page -->
            <router-link :to="{ name: 'IMaps' }">
              <a
                href="./views/InteractiveMapPage.vue"
                class="navbar-brand border-bottom-none hover-underline-animation d-flex d-inline align-items-center"
              >
                Interactive Map
              </a>
            </router-link>

            <!-- latest news page -->
            <router-link :to="{ name: 'latestNews' }">
              <a
                href="./views/LatestNewsPage.vue"
                class="navbar-brand border-bottom-none hover-underline-animation d-flex d-inline align-items-center"
              >
                Latest News
              </a>
            </router-link>

            <!-- get involved page -->
            <router-link :to="{ name: 'getInvolved' }">
              <a
                href="./views/GetInvolvedPage.vue"
                class="navbar-brand border-bottom-none hover-underline-animation d-flex d-inline align-items-center"
              >
                Get Involved
              </a>
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <hr class="my-0" />

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
          return "#8fc1e3";
        case "/Interactive-Maps":
          return "#8fc1e3";
        case "/Latest-News":
          return "#8fc1e3";
        case "/Get-Involved/Donate":
          return "#8fc1e3";
        case "/Get-Involved/Volunteer":
          return "#8fc1e3";

        default:
          return "#8fc1e3";
      }
    },
  },
};
</script>

<style>
/* .navbar {
    position: sticky;
    top: 0;
  } */

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

.leftEle a {
  text-decoration: none;
}

.leftEle a:hover {
  color: #023047;
}

.leftEle a:active {
  color: #023047;
}

.hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation:hover {
  cursor: pointer;
}

.hover-underline-animation::after {
  content: "";
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

.custom-btn {
  --color: #5085a5;
  font-family: inherit;
  display: inline-block;
  width: 8em;
  height: 2.6em;
  line-height: 2em;
  position: relative;
  overflow: hidden;
  border: 2px solid var(--color);
  transition: color 0.5s;
  z-index: 1;
  font-size: 17px;
  border-radius: 6px;
  font-weight: 500;
  color: var(--color);
}

.custom-btn:before {
  content: "";
  position: absolute;
  z-index: -1;
  background: var(--color);
  height: 150px;
  width: 200px;
  border-radius: 50%;
}

.custom-btn:hover {
  color: #fff;
}

.custom-btn:before {
  top: 100%;
  left: 100%;
  transition: all 0.7s;
}

.custom-btn:hover:before {
  top: -30px;
  left: -30px;
}

.custom-btn:active:before {
  background: #023047;
  transition: background 0s;
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
