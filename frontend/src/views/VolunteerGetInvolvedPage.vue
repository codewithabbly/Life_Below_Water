<template>
  <div style="margin-top: 150px">
    <div class="text-center">
      <h1>I have yet to code this out...</h1>
    </div>
  </div>
</template>

<script>
import { volunteeringOpp } from "../data/volunteerOpportunities";

export default {
  name: "gIVolunteer",
  data() {
    return {
      volunteeringOpp,
    };
  },
  methods: {},
  created() {
    console.log("get involved volunteer page works");
    console.log(this.volunteeringOpp);
  },
};
</script>
