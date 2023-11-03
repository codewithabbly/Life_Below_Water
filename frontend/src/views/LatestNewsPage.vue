<template>
  <LoadingScreen v-if="isLoading"></LoadingScreen>
  <div v-else id="snow">
    
    <div class="latest-news-header">
      <form class="form-inline" @submit.prevent="getSearchResult">
        <div class="row" style="padding-right: 50px">
          
          <div class="col-md-3 order-1 order-md-1">
            <h1>Latest News</h1>
          </div>

          <!-- search bar -->
          <!-- <div class="col float-end order-md-last"> -->
            <div class="col-md-9 order-3 order-md-2 d-flex justify-content-md-end">
              <!-- search bar input box -->
              <input
                id="titleSearch"
                class="form-control d-inline"
                style="width: 219px; height: 44.195px;"
                @keyup="getSearchResultAfterEnter"
                type="search"
                placeholder="Search for keyword in title"
                aria-label="Search"
              />

              <!-- search button -->
              <button
                id="searchBtn"
                class="btn my-2 my-sm-0 custom-btn d-inline"
                @click="getSearchResult"
                style="
                  margin-left: 10px; 
                  width: 6em;
                  border-radius: var(--bs-border-radius);
                  background-color: #f3ebdf;
                "
                type="button"
              >
                Search
              </button>

              <!-- reset button -->
              <button
                id="resetBtn"
                class="btn my-2 my-sm-0 custom-btn d-inline"
                @click="resetSearch"
                style="
                  margin-left: 10px; 
                  border-radius: var(--bs-border-radius);
                  background-color: #f3ebdf;
                "
                type="button"
              >
                Reset Search
              </button>
            </div>
          <!-- </div> -->

          <div class="col-12 order-2 order-md-2">
            <h4>
              Welcome to the latest news page. Here, you can find the most recent updates and articles.
            </h4>
          </div>
          <!-- <div class="col-1">
            <button id="searchBtn" class="btn my-2 my-sm-0 custom-btn" @click="getSearchResult" style="margin-left:10px; border-radius: var(--bs-border-radius); background-color: #f3ebdf;" type="submit">Search</button>
          </div> -->
        </div>

        <!-- <div class="row">
          <div class="col-12">
            <h4>
              Welcome to the latest news page. Here, you can find the most
              recent updates and articles.
            </h4>
          </div>
        </div> -->
      
      </form>
    </div>
    <div class="result-header">
      <div class="row p-0">
          <div class="col">
            <h3 id="showResult"></h3>
          </div>
        </div>
    </div>

    <div class="container-fluid">
      <button id="back-to-top" title="Back to Top">Back to Top ↑</button>

      <div class="row">
        <!-- Bootstrap card -->
        <div
          class="card ms-5 mb-5 me-5 p-0"
          v-for="article in filteredArticles"
          :key="article.title"
          style="border: 1px solid #5085a5; background-color: #f3ebdf"
        >
          <div class="row g-0 p-0">
            <div class="col-12 col-sm-6 col-lg-5">
              <img
                v-bind:src="article.urlToImage"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="col-12 col-sm-6 col-lg-7">
              <div class="card-body">
                <h3 class="card-title">{{ article.title }}</h3>
                <p class="card-text">{{ article.description }}</p>
                <a
                  class="btn custom-btn"
                  v-bind:href="article.url"
                  role="button"
                  >READ NEWS</a
                >
                <!--style="background-color: #023047; color: #f7f9fb"-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"; //importing the axios a HTTP library to connects the app with the API
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "jquery/dist/jquery.min.js";
// import * as d3 from 'd3';
import LoadingScreen from "@/components/LoadingScreen.vue";

export default {
  name: "LatestNewsPage",
  components: { LoadingScreen },
  data() {
    return {
      api_key: "131bc06ba3ec4c71b80d985828b87d0b",
      articles: [],
      searchResults: [],
      errors: [],
      hasActivatedSearch: false,
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
  created() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      // axios.get('https://newsapi.org/v2/everything?q=water&apiKey='+this.api_key)
      axios
        .get(
          "https://newsapi.org/v2/everything?q=environmental&apiKey=" +
            this.api_key
        )

        .then((response) => {
          this.articles = response.data.articles;
          console.log("data:");
          console.log(response.data.articles);
        })
        // .catch(e => {
        //   this.errors.push(e)
        // })
        .catch((error) => {
          // Handle errors in this block
          if (error.response) {
            // The request was made and the server responded with a status code
            console.error("Status Code:", error.response.status);
            console.error("Response Data:", error.response.data);
          } else if (error.request) {
            // The request was made, but no response was received
            console.error("No response received:", error.request);
          } else {
            // Something else went wrong
            console.error("Error:", error.message);
          }
          // // Check if the error is due to a network issue (ERR_NAME_NOT_RESOLVED)
          // if (error.message.includes('ERR_NAME_NOT_RESOLVED')) {
          //   console.error('Network error: Failed to resolve domain name');
          //   // Handle the specific network error here
          // } else {
          //   // Handle other types of errors
          //   console.error('Error:', error.message);
          // }
        });
    },

    getSearchResult() {
      console.log("search function called");
      let userInput = document.getElementById("titleSearch").value.toLowerCase();
      console.log(userInput);
      console.log(userInput.length);
      
      if (userInput.length > 0) {
        document.getElementById("showResult").textContent = "Seach result for '" + userInput + "'";
        this.hasActivatedSearch = true;

        for (var i = 0; i < this.articles.length; i++) {
        // console.log(articles[i]);

          let title = this.articles[i].title.toLowerCase();

          if (title.includes(userInput)) {
            this.searchResults.push(this.articles[i]);
          }
        }
      } else {
        document.getElementById("showResult").textContent = "Please enter a word or phrase. eg. carbon";
      }
      
    },

    getSearchResultAfterEnter() {
      // console.log(event); // event is a global object that points to the event that just occurs, not recommended to use this

      document.querySelector("#titleSearch").addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          console.log("user hit enter, now rendering getSearchResult() function......");
          this.getSearchResult();
        }
      })
      
    },

    resetSearch() {
      this.hasActivatedSearch = false;
      document.getElementById("showResult").textContent = "";
      document.getElementById("titleSearch").value = "";
    },

  },
  computed: {
    filteredArticles() {
      if (!this.hasActivatedSearch) {
        console.log("default articles");
        return this.articles;
      } else {
        console.log("filtered articles based on input");
        return this.searchResults;
      }
    },
  },

  // make the search value all toLowerCase()
};
</script>

<style>
/* Add your CSS styles here */

/** customize bootstrap card border-radius */
/* :root {
  --bs-card-border-radius: 15px;
  }

  .d-block {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  } */
/** end of boostrap card border-radius */

.row {
  padding-right: 100px;
}

#back-to-top {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1;
  background-color: #007bff; /* Choose a background color */
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
}

.latest-news-header {
  padding-top: 150px;
  padding-bottom: 25px;
  padding-left: 48px;

  position: sticky; /* why is it not sticky?? */
}

#showResult {
  text-align: center;
  font-weight: bold;
  padding-bottom: 25px;
}

/** styling for background effects start here */
/* #background {
    background-color: #8fc1e3;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='18' viewBox='0 0 100 18'%3E%3Cpath fill='%235085a5' fill-opacity='0.07' d='M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z'%3E%3C/path%3E%3C/svg%3E");

  } */
#snow {
  background-color: #8fc1e3;
  font-family: "glacial", sans-serif;
  background-image: url("../assets/images/dolphin.png"),
    url("../assets/images/turtle.png");
  background-repeat: no-repeat;
  min-height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  -webkit-animation: snow 1000s linear infinite;
  -moz-animation: snow 1000s linear infinite;
  -ms-animation: snow 1000s linear infinite;
  animation: snow 1000s linear infinite;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
@keyframes snow {
  0% {background-position: 100% 0px, 100% 0px, 100% 0px;}
  100% {background-position: -50000px 15000px, -10000px 15000px, 0px 100%;}          
}
@-moz-keyframes snow {
  0% {background-position: 100% 0px, 100% 0px, 100% 0px;}
  100% {background-position: -50000px 15000px, -10000px 15000px, 0px 100%;}          
}
@-webkit-keyframes snow {
  0% {background-position: 100% 0px, 100% 0px, 100% 0px;}
  100% {background-position: -50000px 15000px, -10000px 15000px, 0px 100%;}          
}
@-ms-keyframes snow {
  0% {background-position: 100% 0px, 100% 0px, 100% 0px;}
  100% {background-position: -50000px 15000px, -10000px 15000px, 0px 100%;}          
}   
/** styling for background effects end here */
</style>
