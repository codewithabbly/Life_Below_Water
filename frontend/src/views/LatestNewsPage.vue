<template>
    
  <div class="latest-news-page mt-5 ms-5 pt-5">
      <h1>Latest News</h1>
      <p>Welcome to the latest news page. Here, you can find the most recent updates and articles.</p>
  </div>
  
  <div class="container-fluid">
    <div class="row">

      <!-- Bootstrap card -->
      <div class="card ms-5 mt-6 mb-6" v-for="article in articles" :key="article.title">
        <div class="row g-0 align-items-center" >
          <div class="col-md-3">
            <img v-bind:src="article.urlToImage" class="d-block w-100" alt="...">
          </div>
          <div class="col-md-9">
            <div class="card-body">
              <h2 class="card-title">{{ article.title }}</h2>
              <p class="card-text">{{ article.description }}</p>
              <a class="btn btn-secondary" href="#" role="button">READ NEWS</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
    <!-- <v-app> -->
        <!-- code for news content -->
        <!-- <v-content>
            <v-container fluid>
                <v-layout row wrap align-center>
                <v-flex xs8  offset-md2>
                    <div v-for="article in articles" :key="article.title">
                    <v-card class="my-3" hover data-aos="zoom-in" data-aos-easing="ease">
                        <v-img
                        height="350px"
                        v-bind:src="article.urlToImage"
                        ></v-img>
                        <v-container fill-height fluid>
                            <v-layout>
                            <v-flex xs12 align-end d-flex>
                                <span class="headline">{{ article.title }}</span>
                            </v-flex>
                            </v-layout>
                        </v-container>
                        <v-card-text>
                        {{ article.description }}
                        </v-card-text>
                        <v-card-actions>

                
                        <v-chip small color="secondary" class="white--text">
                        {{article.source.name}}
                        </v-chip>

                        <v-spacer></v-spacer>

                        <v-btn icon class="red--text">
                        <v-icon small>fa-reddit</v-icon>
                        </v-btn>
                        <v-btn icon class="light-blue--text">
                        <v-icon small>fa-twitter</v-icon>
                        </v-btn>
                        <v-btn icon class="blue--text text--darken-4">
                        <v-icon small>fa-facebook</v-icon>
                        </v-btn>

                        <v-btn icon class="red--text">
                        <v-icon small>fa-google-plus</v-icon>
                        </v-btn>

                        <v-btn icon class="blue--text text--darken-4">
                        <v-icon small>fa-linkedin</v-icon>
                        </v-btn>
                        
                        
                        <v-spacer></v-spacer>

                        <v-btn small replace color="info" v-bind:href="article.url" target="_blank" >Read More</v-btn>
                    </v-card-actions>
                    </v-card>
                    </div>
                </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        
    </v-app> -->
</template>
  
<script>

import axios from 'axios'; //importing the axios a HTTP library to connects the app with the API

export default {
    name: 'LatestNewsPage',

  data() {
    return {
      
      api_key:'131bc06ba3ec4c71b80d985828b87d0b',
      articles: [],
      errors: [] 
    }
  },


  created () {
    axios.get('https://newsapi.org/v2/everything?q=water&apiKey='+this.api_key)
    axios.get('https://newsapi.org/v2/everything?q=environmental&apiKey='+this.api_key)
      .then(response => {
        this.articles = response.data.articles
        console.log('data:')
        console.log(response.data.articles)
      })
      .catch(e => {
        this.errors.push(e)
      })
    
  },

  methods: {
     
      setResource(source){

        axios.get('https://newsapi.org/v2/everything?sources='+source+'&apiKey='+this.api_key)
        .then(response => {
          //this.articles = response.data.articles
          this.articles = response.data.articles
          console.log('Source Articles:')
          console.log(response.data.articles) // This will give you access to the full object
        })
        .catch(e => {
          this.errors.push(e)
        })

      }


   }

  }
</script>

  <style scoped>
  /* Add your CSS styles here */
  </style>
  