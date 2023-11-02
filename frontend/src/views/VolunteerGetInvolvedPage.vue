<template>
  <div class="gradient-background">
    <div class="container">
      <div>
        <h1 class="text-center latest-news-header">Volunteer!</h1>
      </div>
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
              <div class="card container space" style="height: auto">
                <div class="row">
                  <!-- left side of card -->
                  <div class="col-md-8">
                    <div class="card-body oppTitle">{{ item.name }}</div>
                    <div class="card-body org">
                      by {{ item.organisation }}, {{ item.country }}
                    </div>
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
                  <!-- right side of card -->
                  <div class="col-md-4">
                    <div>
                      <img
                        :src="item.dataImage"
                        class="card-img-top"
                        :alt="item.dataImage"
                        style="max-height: 200px; object-fit: cover"
                      />
                    </div>

                    <!-- information header -->
                    <!-- <div class="infoHeader">Volunteering Details:</div> -->

                    <!-- date -->
                    <!-- <div class="information">
                      <img
                        src="../assets/images/dateIcon.png"
                        alt=""
                        class="infoIcon"
                      />
                      <div style="padding: 0; font-size: 1rem">
                        {{ item.date }}
                      </div>
                    </div> -->
                    <!-- time -->
                    <!-- <div class="information">
                      <img
                        src="../assets/images/timeIcon.png"
                        alt=""
                        class="infoIcon"
                      />
                      <div style="padding: 0; font-size: 1rem">
                        {{ item.time }}
                      </div>
                    </div> -->
                    <!-- location -->
                    <!-- <div class="information">
                      <img
                        src="../assets/images/locationIcon.png"
                        alt="Location: "
                        class="infoIcon"
                      />
                      <div style="padding: 0; font-size: 1rem">
                        {{ item.location }}
                      </div>
                    </div> -->
                    <!-- information header -->
                    <div class="infoHeader">Profile Categories:</div>
                    <!-- category -->
                    <div class="information">
                      {{ listCategories(item) }}
                    </div>
                    <div class="text-center mt-4 mb-4">
                      <a
                        :href="item.volunteerLink"
                        target="_blank"
                        class="btn custom-btn"
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
    listCategories(item) {
      if (item.category.length > 0) {
        return item.category.join(", ");
      } else {
        return "No suggested category";
      }
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
  padding-bottom: 0;
}
.org {
  padding-top: 0;
  padding-bottom: 0;
}
.information {
  display: flex;
  flex-direction: row;
  font-weight: 350;
  margin: 10px;
  margin-top: 0;
}
.infoHeader {
  padding-top: 10px;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 1rem;
  color: #023047;
}
.infoIcon {
  width: auto;
  height: 1.5rem;
  margin-right: 5px;
}
.space {
  margin-bottom: 20px;
}
.gradient-background {
  background-image: url("../assets/images/homePage_background.png");
  min-width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
}
.latest-news-header {
  padding-top: 150px;
  padding-bottom: 50px;
  padding-left: 50px;
}
</style>
