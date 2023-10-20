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
              src="frontend/src/assets/filterIcon.png"
              style="width: 15px"
              alt="Filter"
            />
            filter by
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
            <div class="card h-100">
              <img :src="item.image" class="card-img-top" alt="Item Image" />
              <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text h-50">{{ item.description }}</p>
                <div class="text-center">
                  <a
                    :href="item.purchaseLink"
                    target="_blank"
                    class="btn btn-primary"
                    >Buy</a
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
export default {
  name: "GetInvolvedPage",
  data() {
    return {
      selectedCountries: [], // Stores selected countries
      selectedCategories: [], // Stores selected categories
      items: [
        {
          name: "keyboard",
          image: "frontend/src/assets/greenNudge.jpeg",
          description: "A high-quality keyboard for typing and gaming.",
          country: "Singapore",
          category: "Electronics",
          purchaseLink: "https://example.com/keyboard",
        },
        {
          name: "mouse",
          image: "mouse.jpg",
          description: "An ergonomic mouse with customizable buttons.",
          country: "Laos",
          category: "Electronics",
          purchaseLink: "https://example.com/keyboard",
        },
        {
          name: "iPhone",
          image: "iphone.jpg",
          description: "The latest iPhone with a stunning display.",
          country: "Philippines",
          category: "Electronics",
          purchaseLink: "https://example.com/keyboard",
        },
        {
          name: "macbook",
          image: "macbook.jpg",
          description: "A sleek and powerful MacBook for your work.",
          country: "Singapore",
          category: "Electronics",
          purchaseLink: "https://example.com/keyboard",
        },
        {
          name: "adapter",
          image: "adapter.jpg",
          description: "A versatile adapter for your devices.",
          country: "Laos",
          category: "Electronics",
          purchaseLink: "https://example.com/keyboard",
        },
        {
          name: "apple",
          image: "apple.jpg",
          description: "A delicious and healthy fruit.",
          country: "Philippines",
          category: "Fruits",
          purchaseLink: "https://example.com/keyboard",
        },
        {
          name: "orange",
          image: "orange.jpg",
          description: "Sweet and juicy oranges from Spain.",
          country: "Spain",
          category: "Fruits",
          purchaseLink: "https://example.com/keyboard",
        },
        {
          name: "pear",
          image: "pear.jpg",
          description: "Fresh and crisp pears.",
          country: "USA",
          category: "Fruits",
          purchaseLink: "https://example.com/keyboard",
        },
        // Add more items with different countries and categories here
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
          this.selectedCategories.includes(item.category)
        );
      }

      return filtered;
    },
    uniqueCountries() {
      return Array.from(new Set(this.items.map((item) => item.country)));
    },
    uniqueCategories() {
      return Array.from(new Set(this.items.map((item) => item.category)));
    },
  },
  methods: {},
  created() {
    console.log("get involve page Test works");
  },
};
</script>

<style></style>
