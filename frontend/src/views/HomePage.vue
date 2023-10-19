<template>
  <v-app>
    <v-container>
      <div class="homePage">
        <h1 class="page-title m-5">
          What can one person do to make a difference to the world's oceans?
        </h1>
      </div>
    </v-container>
  </v-app>
  <div class="background-image">
    <h1 class="title">
      What can one person do to make a<br />
      difference to the world's oceans?
    </h1>

    <div class="scrollable-content">
      <div v-for="item in items" :key="item.id">
        {{ item.text }}

        <!-- <div class="card mb-3" style="max-width: 540px;">
                              <div class="row g-0">
                                <div class="col-md-4">
                                  <img src="..." class="img-fluid rounded-start" alt="...">
                                </div>
                                <div class="col-md-8">
                                  <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                  </div>
                                </div>
                              </div>
                            </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "jquery/dist/jquery.min.js";

export default {
  name: "homePage",
  mounted() {
    document.title = "Sponge Bob Square Pants";
  },
  created() {
    console.log("Test works");
  },
};
</script>

<style></style>
