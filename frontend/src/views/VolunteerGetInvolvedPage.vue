<template>
  <div>
    <h1 class="text-center" style="margin-top: 150px">Volunteer!</h1>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <!-- Display the card count in a separate row -->
        <div class="row">
          <div>
            <p>{{ filteredItems.length }} RESULT(S) FOUND</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <!-- START filter  -->
        <p class="d-md-none">
          <button
            class="btn btn-light rounded-pill"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFilter"
          >
            <img
              src="../assets/images/filterIcon.png"
              style="width: 15px"
              alt="Filter"
            />
            filter
          </button>
        </p>
        <div class="collapse d-md-block" id="collapseFilter">
          <div class="card card-body">
            <h4>Filter by</h4>
            <h5>Location</h5>
            <div v-for="country in uniqueCountries" :key="country">
              <label>
                <input
                  type="checkbox"
                  v-model="selectedCountries"
                  :value="country"
                />
                {{ country }}
              </label>
            </div>
            <h5>Categories</h5>
            <div v-for="category in uniqueCategories" :key="category">
              <label>
                <input
                  type="checkbox"
                  v-model="selectedCategories"
                  :value="category"
                />
                {{ category }}
              </label>
            </div>
          </div>
        </div>
        <!-- END filter -->
      </div>
      <div class="col-md-9">
        <div class="row">
          <div v-for="(item, index) in filteredItems" :key="index">
            <div class="card container" style="height: auto">
              <div class="row">
                <div class="col-md-8">
                  <div class="card-body oppTitle">{{ item.name }}</div>
                  <div class="card-body overflow-hide">
                    <p class="card-text" v-if="!item.expanded">
                      {{ shortenDescription(item) }}
                    </p>
                    <p class="card-text" v-else>{{ item.description }}</p>
                    <!-- start of read more button -->
                    <div v-if="shouldShowButton(item)">
                      <div style="text-align: right">
                        <button class="read" @click="toggleExpand(item)">
                          {{ item.expanded ? "Read Less" : "Read More" }}
                        </button>
                      </div>
                    </div>
                    <!-- end of read more button -->
                  </div>
                </div>
                <div class="col-md-4">
                  <img
                    :src="item.image"
                    class="card-img-top"
                    alt="Item Image"
                    style="max-height: 200px; object-fit: cover"
                  />
                  <div class="text-center mt-5 mb-1">
                    <a
                      :href="item.volunteerLink"
                      target="_blank"
                      class="btn btn-primary"
                      >Volunteer</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      selectedCountries: [], // Stores selected countries
      selectedCategories: [], // Stores selected categories
    };
  },
  computed: {
    filteredItems() {
      let filtered = this.volunteeringOpp;

      if (this.selectedCountries.length > 0) {
        filtered = filtered.filter((item) =>
          this.selectedCountries.includes(item.country)
        );
      }

      if (this.selectedCategories.length > 0) {
        filtered = filtered.filter((item) =>
          item.category.some((cat) => this.selectedCategories.includes(cat))
        );
      }
      return filtered;
    },
    uniqueCountries() {
      return Array.from(
        new Set(this.volunteeringOpp.map((item) => item.country))
      );
    },

    uniqueCategories() {
      const uniqueCategories = this.volunteeringOpp
        .reduce((categories, item) => categories.concat(item.category), [])
        .filter((value, index, self) => self.indexOf(value) === index);
      return uniqueCategories;
    },
  },
  methods: {
    toggleExpand(item) {
      console.log(item);
      item.expanded = !item.expanded;
    },
    shortenDescription(item) {
      if (item.description.length > 300) {
        // Change the character limit as needed
        return item.description.slice(0, 300) + "...";
      }
      return item.description;
    },
    shouldShowButton(item) {
      if (item.description.length > 300) {
        return true;
      }
      return false;
    },
  },
  created() {
    console.log("get involved volunteer page works");
    console.log(this.volunteeringOpp);
  },
};
</script>
<style>
.read {
  text-decoration: underline;
  color: black;
  background-color: transparent;
  border: none;
  padding: 0;
}
.oppTitle {
  color: #023047;
  font-weight: 700;
  font-size: 1.6em;
}
</style>
