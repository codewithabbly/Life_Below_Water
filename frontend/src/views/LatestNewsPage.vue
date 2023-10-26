<template>
  <div id="background" >

    
    <div class="latest-news-header">
        <h1>Latest News</h1>
        <h4>Welcome to the latest news page. Here, you can find the most recent updates and articles.</h4>
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
                <a class="btn" v-bind:href="article.url" role="button">READ NEWS</a>
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

<style>
  /* Add your CSS styles here */
  .latest-news-header {
    padding-top: 150px;
    padding-bottom: 50px;
    padding-left: 50px;
    position: sticky; /* why is it not sticky?? */
  }

  #background {
    background-color: #8fc1e3;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='18' viewBox='0 0 100 18'%3E%3Cpath fill='%235085a5' fill-opacity='0.07' d='M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z'%3E%3C/path%3E%3C/svg%3E");

  }

  .btn {
    --color: #5085a5;
    font-family: inherit;
    display: inline-block;
    width: 8em;
    height: 2.6em;
    line-height: 2em;
    position: relative;
    overflow: hidden;
    border: 2px solid var(--color);
    transition: color .5s;
    z-index: 1;
    font-size: 17px;
    border-radius: 6px;
    font-weight: 500;
    color: var(--color);
  }

  .btn:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
  }

  .btn:hover {
    color: #fff;
  }

  .btn:before {
    top: 100%;
    left: 100%;
    transition: all .7s;
  }

  .btn:hover:before {
    top: -30px;
    left: -30px;
  }

  .btn:active:before {
    background: #3a0ca3;
    transition: background 0s;
  }
</style>
  