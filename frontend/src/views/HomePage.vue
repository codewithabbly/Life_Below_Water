
<template>

      <div class="container background-img">
            <div id="divider" class="row divider-section"></div>

            <div id="main" class="row main-section center-items">
                  <!-- <h1 class="responsive-title typewriter col-10 col-sm-8"> -->
                  <h1 class="responsive-title typewriter col-10 col-sm-8">
                        <span>What can one person do to make<br/>a difference to the world's oceans?</span>
                  </h1>
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/>

            <div class="row find-out-section center-items">
                  <p>Find Out More</p>
                  <img src="../assets/images/findOutMore.png" class="center-items"> 
            </div>

            <div class="row mission-section center-items">
                  <h2>Our Mission</h2>
                  <p>This is a brief description of our mission.</p>
                  <div class="card text-center col-10" style="width: 80vw">
                        <p>There are many research about water pollution and its effects. However, access to these information takes time and the data lacks proper consolidation. Hence, people only have a vague idea of the water pollution problem. As a result, they fail to see the extent of environmental challenges it poses and the how we need to take action urgently. People also do not fully understand how they can contribute to the water conservation efforts.</p>
                  </div>
            </div>

            <div class="row goals-section center-items">
                  <h2>Our Goals</h2>
                  <p>These are our goals and what we aim to achieve.</p>

                  <!-- Carousell -->
                  <div id="goals-carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">

                        <!-- Slides -->
                        <div class="carousel-inner">

                              <!-- Slide 1 -->
                              <div class="carousel-item active">
                                    <!-- <img src="../assets/images/nemo.jpg" class="d-block w-100" alt="Goal 1"> -->
                                    <div class="carousel-caption">
                                          <h3>Goal 1</h3>
                                          <p>Goal 1 description</p>
                                    </div>
                              </div>

                              <!-- Slide 2 -->
                              <div class="carousel-item">
                                    <!-- <img src="../assets/images/dolphin.png" class="d-block w-100" alt="Goal 2"> -->
                                    <div class="carousel-caption">
                                          <h3>Goal 2</h3>
                                          <p>Goal 2 description</p>
                                    </div>
                              </div>
                              
                              <!-- Slide 3 -->
                              <div class="carousel-item">
                                    <!-- <img src="../assets/images/turtle.png" class="d-block w-100" alt="Goal 3"> -->
                                    <div class="carousel-caption">
                                          <h3>Goal 3</h3>
                                          <p>Goal 3 description</p>
                                    </div>
                              </div>

                        </div>
                        <!-- Controls -->
                        <a class="carousel-control-prev" href="#goals-carousel" role="button" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#goals-carousel" role="button" data-bs-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Next</span>
                        </a>
                  </div>

            </div>
      </div>
</template>

<script>
      export default {
            name: 'homePage',
            mounted() {
                  document.title = "Life Below Water";
            },
      }
</script>

<style scoped>
h1, h2, p {
      font-family: "glacial", sans-serif;
}

.background-img {
      background-image: url('../assets/images/ocean.jpg'); 
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat; 
      min-width: 100vw;
      margin: 0;
      padding: 0;
}

.center-items {
      display: flex;
      text-align: center;
      justify-content: center;
}

.responsive-title {
      color: #023047;
      line-height: 1em;
      font-family:'Times New Roman', Times, serif;
      font-size: 4vw;
      font-weight: 80;
      margin-top: 100px; 
      white-space: nowrap;
}

.typewriter {
      overflow: hidden; /* Hide overflow text */
      white-space: nowrap; /* Ensure the text stays on one line */
      display: inline; /* Keep the text in the same span element */
      animation: typing 5s steps(50, end), blink-caret 0.75s step-end infinite;
      max-width: 80%;
      overflow: hidden;
}

@media screen and (max-width: 576px) {
      .typewriter {
            font-size: 3vw; 
      }
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
from, to {
      border-right-color: transparent;
}
50% {
      border-right-color: #000; /* Blinking cursor color */
}
}

.find-out-section {
      color: #fff; /* Set the text color */
      text-align: center;
      font-size: 1.5vw;
      padding: 10px;
}

.find-out-section img {
      width: 8%; 
      vertical-align: middle;
      margin-left: 5px; /* spacing between text and icon */
}

.mission-section {
      color: white;
      margin-top: 100px; /* create space below the fixed section */
      padding: 20px; 
}

.goals-section {
      color: white;
      padding: 20px; 
}


</style>