<template>
  <LoadingScreen v-if="isLoading"></LoadingScreen>
  <div v-else>
    <div>
      <h1 class="text-center" style="margin-top: 150px">Donate!</h1>
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
        <div class="col-md-3 whenError">
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
                      <div style="text-align: right">
                        <button class="read" @click="toggleExpand(item)">
                          {{ item.expanded ? "Read Less" : "Read More" }}
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- right side of card -->
                  <div class="col-md-4">
                    <img
                      :src="item.image"
                      class="card-img-top"
                      alt="Item Image"
                      style="max-height: 200px; object-fit: cover"
                    />

                    <!-- progress bar  -->
                    <div class="text-center mt-2">
                      <span class="amount">${{ item.currentAmt }}</span>
                      raised of <span class="amount">${{ item.goalAmt }}</span>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        :style="{ width: widthCal(item) }"
                      ></div>
                    </div>
                    <div class="text-center mt-4 mb-4">
                      <a
                        :href="item.donateLink"
                        target="_blank"
                        class="btn custom-btn"
                        >Donate</a
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
import axios from "axios";
import LoadingScreen from "../components/LoadingScreen.vue";
export default {
  name: "gIDonate",
  components: { LoadingScreen },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
  data() {
    return {
      isLoading: true,
      selectedCountries: [], // Stores selected countries
      selectedCategories: [], // Stores selected categories
      items: [],
    };
  },
  computed: {
    filteredItems() {
      let filtered = this.items;

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
      return Array.from(new Set(this.items.map((item) => item.country)));
    },

    uniqueCategories() {
      const uniqueCategories = this.items
        .reduce((categories, item) => categories.concat(item.category), [])
        .filter((value, index, self) => self.indexOf(value) === index);
      return uniqueCategories;
    },
  },
  methods: {
    getData() {
      const url =
        "https://api.globalgiving.org/api/public/projectservice/themes/water/projects/active";
      var key = "dfbf4532-53b3-407c-8b2b-d96dc0135ee3";
      axios
        .get(url, {
          params: {
            api_key: key,
          },
        })
        .then((response) => {
          var arrProj = response.data.projects.project;
          console.log(arrProj[0]);
          for (var obj of arrProj) {
            var title = obj.title;
            var image = obj.image.imagelink.find(
              (link) => link.size === "large"
            ).url;
            var description = obj.activities;

            var country = obj.contactCountry;
            var category = [];
            var categoriesArr = obj.themes.theme;

            for (var categoryObj of categoriesArr) {
              var categoryName = categoryObj.name;
              category.push(categoryName);
            }

            var donateLink = obj.projectLink;
            var currentAmt = obj.funding;
            var goalAmt = obj.goal;

            var organisation = obj.organization.name;

            var newObj = {
              name: title,
              image: image,
              description: description,
              country: country,
              category: category,
              donateLink: donateLink,
              expanded: false,
              currentAmt: currentAmt,
              goalAmt: goalAmt,
              organisation: organisation,
            };

            this.items.push(newObj);
            // console.log(this.items);
          }
        })
        .catch((error) => {
          console.log(error.message);
          // showErrorMessage();
        });
    },
    toggleExpand(item) {
      // console.log(item);
      item.expanded = !item.expanded;
    },
    showErrorMessage() {
      document.getElementById("error-message").style.display = "block";
    },
    shortenDescription(item) {
      if (item.description.length > 300) {
        // Change the character limit as needed
        return item.description.slice(0, 300) + "...";
      }
      return item.description;
    },
    widthCal(item) {
      let currentAmt = item.currentAmt;
      let goalAmt = item.goalAmt;
      let fraction = (currentAmt / goalAmt) * 100;

      return fraction + "%";
    },
  },
  created() {
    console.log("get involve donate page Test works");
    this.getData();
  },
};
</script>

<style>
.amount {
  font-size: 1.5rem;
}
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
.progress-bar {
  background-color: #8fc1e3;
}
.org {
  padding-top: 0;
  padding-bottom: 0;
}
.space {
  margin-bottom: 20px;
}
.whenError {
  background-color: green;
}
</style>
