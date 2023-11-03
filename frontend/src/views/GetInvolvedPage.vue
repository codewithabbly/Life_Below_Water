<template>
  <div class="gradient-background overflow-scroll">
    <div class="container get-involved-header">
      <div class="row">
        <h1>Wave goodbye to pollution!</h1>
        <h1>Every drop counts in making a <em>splash-ing</em> difference!</h1>
      </div>
      <div class="options row mt-5">
        <!-- start of donate card -->
        <div class="card text-center" style="width: 18rem">
          <img
            src="../assets/images/donateIcon.png"
            class="card-img-top mx-auto"
            alt="Donate Image"
            style="width: 12rem; height: auto"
          />
          <div class="card-body">
            <router-link to="/Get-Involved/Donate">
              <button class="btn custom-btn">Donate</button>
            </router-link>
          </div>
        </div>
        <!-- end of donate card -->

        <!-- start of volunteer card  -->
        <div class="card text-center" style="width: 18rem">
          <img
            src="../assets/images/volunteerIcon.png"
            class="card-img-top mx-auto"
            alt="Volunteer Image"
            style="width: 12rem; height: auto"
          />
          <div class="card-body">
            <router-link to="/Get-Involved/Volunteer">
              <button class="btn custom-btn">Volunteer</button>
            </router-link>
          </div>
        </div>
        <!-- end of volunteer card -->
      </div>
    </div>
  </div>
</template>
<style>
.options {
  display: flex;
  justify-content: space-around;
}
.gradient-background {
  background-image: url("../assets/images/homePage_background.png");
  min-width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
.get-involved-header {
  padding-top: 150px;
  padding-bottom: 50px;
  padding-left: 50px;
}

.get-involved-header h1 {
  text-align: center;
}
</style>

<script>
export default {
  name: "GetInvolvedPage",
  mounted() {
    document.title = "Get Involved";
  },

  methods: {},
};
</script>
