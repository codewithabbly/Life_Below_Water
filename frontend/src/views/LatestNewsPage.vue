<template>
  <div id="snow" style="background-color: #8fc1e3;" >

    
    <div class="latest-news-header">
        <div class="row">
          <div class="col-9">
            <h1>Latest News</h1>
            <h4>Welcome to the latest news page. Here, you can find the most recent updates and articles.</h4>
          </div>
          
          <div class="col-3">
            
            <form class="form-inline">
              <div class="input-group " style="border-radius: var(--bs-border-radius);">
                <input class="form-control mr-sm-2" type="search" placeholder="Search for keyword in title" aria-label="Search">
              
                <button class="btn my-2 my-sm-0 custom-btn" style="margin-left:10px; border-radius: var(--bs-border-radius);" type="submit">Search</button>
              
              </div>
            </form>
            
            
          </div>
        </div>
    </div>
    
    
    <div class="container-fluid">
      <button id="back-to-top" title="Back to Top">Back to Top ↑</button>
<!--       
      <div class="game-wave ms-5" data-type="wave">
        <div class="controls">
          <h1 class="tip">LOADING...</h1>
        </div>
        <div class="checkboxes"><input type="checkbox" id="checkbox-1" disabled="">
          <input type="checkbox" id="checkbox-2" disabled="">
          <input type="checkbox" id="checkbox-3" disabled="">
          <input type="checkbox" id="checkbox-4" disabled="">
          <input type="checkbox" id="checkbox-5" disabled="">
          <input type="checkbox" id="checkbox-6" disabled="">
          <input type="checkbox" id="checkbox-7" disabled="">
          <input type="checkbox" id="checkbox-8" disabled="">
          <input type="checkbox" id="checkbox-9" disabled="">
          <input type="checkbox" id="checkbox-10" disabled="">
          <input type="checkbox" id="checkbox-11" disabled="">
          <input type="checkbox" id="checkbox-12" disabled="">
          <input type="checkbox" id="checkbox-13" disabled="">
          <input type="checkbox" id="checkbox-14" disabled="">
          <input type="checkbox" id="checkbox-15" disabled="">
          <input type="checkbox" id="checkbox-16" disabled="">
          <input type="checkbox" id="checkbox-17" disabled="">
          <input type="checkbox" id="checkbox-18" disabled="">
          <input type="checkbox" id="checkbox-19" disabled="">
          <input type="checkbox" id="checkbox-20" disabled="">
        </div>
      </div> -->
      
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
                <a class="btn custom-btn" v-bind:href="article.url" role="button">READ NEWS</a>
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
    // axios.get('https://newsapi.org/v2/everything?q=water&apiKey='+this.api_key)
    axios.get('https://newsapi.org/v2/everything?q=environmental&apiKey='+this.api_key)
    
    .then(response => {
      this.articles = response.data.articles
      console.log('data:')
      console.log(response.data.articles)
    })
    // .catch(e => {
    //   this.errors.push(e)
    // })
    .catch(error => {
      // Handle errors in this block
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Status Code:', error.response.status);
        console.error('Response Data:', error.response.data);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something else went wrong
        console.error('Error:', error.message);
      }
      // // Check if the error is due to a network issue (ERR_NAME_NOT_RESOLVED)
      // if (error.message.includes('ERR_NAME_NOT_RESOLVED')) {
      //   console.error('Network error: Failed to resolve domain name');
      //   // Handle the specific network error here
      // } else {
      //   // Handle other types of errors
      //   console.error('Error:', error.message);
      // }
    })
    
  }
}


</script>

<style>
  /* Add your CSS styles here */
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
    padding-bottom: 50px;
    padding-left: 50px;
    
    position: sticky; /* why is it not sticky?? */
  }

  /** styling for loading waves start here */
  /* .game-wave {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.checkboxes {
  display: flex;
  animation: wave 2s infinite linear;
  transform-origin: center;
  margin-top: 100px;
}

.wave-checkbox {
  animation: checkbox-wave 2s infinite linear alternate;
}

@keyframes wave {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-100px); 
  }
}

@keyframes checkbox-wave {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-100px); 
} */
/** styling for loading waves end here */


/** styling for background effects start here */
  /* #background {
    background-color: #8fc1e3;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='18' viewBox='0 0 100 18'%3E%3Cpath fill='%235085a5' fill-opacity='0.07' d='M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z'%3E%3C/path%3E%3C/svg%3E");

  } */
  #snow{
    background-color: #8fc1e3;
    font-family: "glacial", sans-serif;
    background-image: url('../assets/images/dolphin.png'), url('../assets/images/turtle.png');
    background-repeat: no-repeat;
    height: 1000%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index:1;
    -webkit-animation: snow 1000s linear infinite;
    -moz-animation: snow 1000s linear infinite;
    -ms-animation: snow 1000s linear infinite;
    animation: snow 1000s linear infinite;
    -webkit-transform: translate3d(0,0,0);
    -moz-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    -o-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
}
@keyframes snow {
  0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
  100% {background-position: 50000px 50000px, 10000px 20000px, -10000px 15000px;}          
}
@-moz-keyframes snow {
  0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
  100% {background-position: 50000px 50000px, 10000px 20000px, -10000px 15000px;}          
}
@-webkit-keyframes snow {
  0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
  100% {background-position: 50000px 50000px, 10000px 20000px, -10000px 15000px;}          
}
@-ms-keyframes snow {
  0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
  100% {background-position: 50000px 50000px, 10000px 20000px, -10000px 15000px;}          
}   
/** styling for background effects end here */


</style>
  