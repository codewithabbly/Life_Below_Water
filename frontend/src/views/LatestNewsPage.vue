<template>
  <div style="background-color: #8fc1e3;">
    <div class="latest-news-page mt-5 ms-5 pt-5">
        <h1>Latest News</h1>
        <p>Welcome to the latest news page. Here, you can find the most recent updates and articles.</p>
    </div>
    
    <div class="container-fluid">
      <div class="row">

        <!-- Bootstrap card -->
        <div class="card ms-5 mb-5 me-5 p-0" v-for="article in articles" :key="article.title" style="border: 1px solid #5085a5; background-color: #f3ebdf;">
          <div class="row g-0 " >
            <div class="col-md-3">
              <img v-bind:src="article.urlToImage" class="d-block w-100" alt="...">
            </div>
            <div class="col-md-9">
              <div class="card-body">
                <h2 class="card-title">{{ article.title }}</h2>
                <p class="card-text">{{ article.description }}</p>
                <a class="btn btn-secondary" v-bind:href="article.url" role="button">READ NEWS</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
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
  