<template>
  <div>
    <h1 class="text-center" style="margin-top: 150px">Donate!</h1>
  </div>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <!-- Display the card count in a separate row -->
        <div class="row">
          <div class="col-md-4">
            <p>{{ filteredItems.length }} RESULT(S) FOUND</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <!-- START final filter: filter card as a button -->
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
        <!-- END final filter: filter card as a button -->
      </div>
      <div class="col-md-9">
        <div class="row">
          <div
            class="col-md-4"
            v-for="(item, index) in filteredItems"
            :key="index"
          >
            <div class="card" style="height: 555px">
              <img
                :src="item.image"
                class="card-img-top"
                alt="Item Image"
                style="max-height: 150px; object-fit: cover"
              />
              <div class="card-body">
                <div class="h-75">
                  <h5 class="card-title">{{ item.name }}</h5>
                  <p class="card-text">{{ item.description }}</p>
                </div>
                <div class="text-center mt-5">
                  <a
                    :href="item.donateLink"
                    target="_blank"
                    class="btn btn-primary"
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
</template>

<script>
import axios from "axios";
export default {
  name: "getInvolved",
  data() {
    return {
      selectedCountries: [], // Stores selected countries
      selectedCategories: [], // Stores selected categories
      items: [
        // start of removing fake data
        // {
        //   name: "Waterways Watch Society",
        //   image: "../assets/filterIcon.png",
        //   description:
        //     "This non-profit organization in Singapore focuses on the cleanup and conservation of waterways. They also conduct educational programs and outreach to promote water conservation.",
        //   country: "Singapore",
        //   category: "Electronics",
        //   donateLink: "https://www.giving.sg/waterways-watch-society",
        // },
        // {
        //   name: "WWF - World Wide Fund For Nature (Singapore)",
        //   image: "wwfSg.jpeg",
        //   description:
        //     "WWF Singapore is a local arm of the global conservation organization, working to protect and conserve Singapore's unique wildlife and ecosystems.",
        //   country: "Laos",
        //   category: "Electronics",
        //   donateLink:
        //     "https://www.giving.sg/campaigns/help_singapore_wildlife_0823",
        // },
        // {
        //   name: "iPhone",
        //   image: "iphone.jpg",
        //   description: "The latest iPhone with a stunning display.",
        //   country: "Philippines",
        //   category: "Electronics",
        //   donateLink: "https://example.com/keyboard",
        // },
        // {
        //   name: "macbook",
        //   image: "macbook.jpg",
        //   description: "A sleek and powerful MacBook for your work.",
        //   country: "Singapore",
        //   category: "Electronics",
        //   donateLink: "https://example.com/keyboard",
        // },
        // {
        //   name: "adapter",
        //   image: "adapter.jpg",
        //   description: "A versatile adapter for your devices.",
        //   country: "Laos",
        //   category: "Electronics",
        //   donateLink: "https://example.com/keyboard",
        // },
        // {
        //   name: "apple",
        //   image: "apple.jpg",
        //   description: "A delicious and healthy fruit.",
        //   country: "Philippines",
        //   category: "Fruits",
        //   donateLink: "https://example.com/keyboard",
        // },
        // {
        //   name: "orange",
        //   image: "orange.jpg",
        //   description: "Sweet and juicy oranges from Spain.",
        //   country: "Spain",
        //   category: "Fruits",
        //   donateLink: "https://example.com/keyboard",
        // },
        // {
        //   name: "pear",
        //   image: "pear.jpg",
        //   description: "Fresh and crisp pears.",
        //   country: "USA",
        //   category: "Fruits",
        //   donateLink: "https://example.com/keyboard",
        // },
        // Add more items with different countries and categories here
        // end of removing fake data
      ],
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
    // uniqueCategories() {
    //   return Array.from(new Set(this.items.map((item) => item.category)));
    // },
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
          for (var obj of arrProj) {
            var title = obj.title;
            var image = obj.image.imagelink.find(
              (link) => link.size === "large"
            ).url;
            var description;
            if (obj.activities.indexOf(".") !== -1) {
              description = obj.activities.slice(
                0,
                obj.activities.indexOf(".")
              );
            } else {
              description = obj.activities;
            }

            var country = obj.contactCountry;
            var category = [];
            var categoriesArr = obj.themes.theme;

            for (var categoryObj of categoriesArr) {
              var categoryName = categoryObj.name;
              category.push(categoryName);
            }

            var donateLink = obj.projectLink;

            var newObj = {
              name: title,
              image: image,
              description: description,
              country: country,
              category: category,
              donateLink: donateLink,
            };

            this.items.push(newObj);
          }
          // Update your component's 'items' with the fetched data
          // this.items = response.data;
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
  created() {
    console.log("get involve page Test works");
    this.getData();
  },
};
</script>

<style></style>
