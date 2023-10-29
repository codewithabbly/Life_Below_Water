<template>
      <v-app>
            <v-container>
                  <div class="container">
                        <div class="row">
                              <h1 class="title col-md-10 col-sm-8 typewriter">What can one person do to make a difference to the world's oceans?</h1>
                        </div>

                        <div class="scrollable-content">
      
                              <div class="card mb-3" style="max-width: 540px;">
                                    <div class="row g-0">
                                    <div class="col-md-4">
                                    <!-- <img src="..." class="img-fluid rounded-start" alt="..."> -->
                                    </div>
                                    <div class="col-md-8">
                                    <!-- <div class="card-body">
                                          <h5 class="card-title">Card title</h5>
                                          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div> -->
                                    </div>
                                    </div>
                              </div>
      
                              <div class="arrow">
                                    <a href="#more">
                                          <span style="color:white">Find Out More</span>
                                    </a>
                              </div>
                        </div>
                  </div>

            </v-container>
      </v-app> 
      
</template>

<script>
      export default {
            name: 'homePage',
            mounted() {
                  document.title = "Sponge Bob Square Pants";
                  document.title = "Life Below Water";
            },
            created() {
                  console.log("Test works")
            }

            // created() {
                  
            // }
      }
</script>

<style scoped>
body {
      overflow-x: hidden;
}

.container {
      background-image: url('../assets/images/ocean.jpg'); 
      background-position: center;
      background-size: cover;
      background-position: center;
      background-attachment: fixed; /* Optional, to make the background fixed */
      background-repeat: no-repeat; /* Prevent the image from repeating */
      min-height: 100vh;
      min-width: 100vw;
      margin: 0;
      padding: 0;
      }

.title {
      display: flex;
      text-align: center;
      justify-content: center;

      color: #023047;
      font-size: 64px;
      line-height: 1em;
      font-family:'Times New Roman', Times, serif;
      font-weight: 100;
      
      position: absolute;
      top: 30%;
}

.arrow {
      text-align: center;
      position: fixed;
      bottom: 0;
      left: 0;
}

.arrow a {
      display: block;
      background-color: transparent;
      color: #007BFF;
      font-size: 20px;
      text-decoration: none;
      cursor: pointer;
}

.arrow a span {
      border-bottom: 2px solid #007BFF;
      padding: 5px 10px;
      transition: border-color 0.3s;
}

.arrow a:hover span {
      border-color: #0056b3;
}

.typewriter {
      overflow: hidden; /* Hide overflow text */
      white-space: nowrap; /* Make text stay on one line */
      animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
from {
      width: 0;
}
to {
      width: 100%;
}
}

@keyframes blink-caret {
from,
to {
      border-right-color: transparent;
}
50% {
      border-right-color: #000; /* Blinking cursor color */
}
}

</style>