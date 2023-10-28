<template>
  <div style="margin-top: 150px">
    <div class="container">
      <div class="row">
        <h1>Wave goodbye to pollution!</h1>
        <h1>Every drop counts in making a splash-ing difference!</h1>
      </div>
      <div class="row mt-5">
        <div class="col-2"></div>
        <!-- start of donate card -->
        <div class="card text-center col-3" style="width: 18rem">
          <img
            src="../assets/images/donateIcon.png"
            class="card-img-top mx-auto"
            alt="Item Image"
            style="width: 12rem; height: auto"
          />
          <div class="card-body">
            <router-link to="/Get-Involved/Donate">
              <button class="btn custom-btn">Donate</button>
            </router-link>
          </div>
        </div>
        <!-- end of donate card -->
        <div class="col-2"></div>
        <!-- start of volunteer card  -->
        <div class="card text-center col-3" style="width: 18rem">
          <img
            src="../assets/images/volunteerIcon.png"
            class="card-img-top mx-auto"
            alt="Item Image"
            style="width: 12rem; height: auto"
          />
          <div class="card-body">
            <router-link to="/Get-Involved/Volunteer">
              <button class="btn custom-btn">Volunteer</button>
            </router-link>
          </div>
        </div>
        <!-- end of volunteer card -->
        <div class="col-2"></div>
      </div>
      <!-- <router-link to="/Get-Involved/Donate">
      <button class="btn btn-primary">CLICK ME TO DONATE</button>
    </router-link> -->
    </div>
  </div>
</template>
<style>
h1 {
  text-align: center;
}
</style>

<script>
export default {
  name: "GetInvolvedPage",

  methods: {},
};
</script>
