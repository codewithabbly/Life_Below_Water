
<template>

      <div class="container gradient-background">

            <!-- landing screen -->
            <div id="main" class="main-section center-items">

                  <!-- title -->
                  <div class="title-section">
                        <div class="row">
                              <!-- TODO: fix typewriter animation to appear one at a time -->
                              <p class="responsive-title typewriter">
                                    <span>What can one person do to make </span>
                              </p>
                              <br/>
                              <p class="responsive-title typewriter2">
                                    <span>a difference to the world's oceans?</span>
                              </p>
                        </div>
                  </div>

                  <!-- dolphin animation -->
                  <!-- TODO: make dolphin size responsive, make dolphin appear onload (delay typewriter), might need to replace the whole gif tbh -->
                  <div class="dolphin-section">
                        <img id="dolphinGIF" style="display: none" src="../assets/images/homepage_dolphinAnimation.gif">
                  </div>
                  
                  <!-- find out more -->
                  <div class="row find-out-section center-items float">
                        <a href="#mission-section" style="text-decoration: none;">
                              <p style="margin: 0px; padding: 0px">Find Out More</p>
                              <img src="../assets/images/findOutMore.png"> 
                        </a>
                  </div>
            </div>
            
            <!-- our mission -->
            <div class="mission-section" id="mission-section">
                  <div class="row center-items vertical-center">
                        <div class="col-4 mission-logo reveal fade-left">
                              <img src="../assets/images/ourLogo.png" class="img-fluid">
                        </div>
                        <div class="col-6 mission-card reveal fade-right">
                              <h1>Our Mission</h1>
                              <p>There are many research about water pollution and its effects. However, access to these information takes time and the data lacks proper consolidation. Hence, people only have a vague idea of the water pollution problem. As a result, they fail to see the extent of environmental challenges it poses and the how we need to take action urgently. People also do not fully understand how they can contribute to the water conservation efforts.</p>
                              <p>Life Below Water seeks to provide a platform where we can bring insights into latest news about the recent events, allow seamless sharing of information between people, and hopefully, increase one’s social awareness to the sustainable use and management of our water bodies.</p>
                        </div>
                  </div>
            </div>

            <!-- our goals -->
            <div class="row goals-section center-items reveal fade-bottom">

                  <h1 style="color: #0B3146"><b>Our Goals</b></h1>

                  <!-- TODO: carousel's image is stuck on the last image -->
                  <div id="carouselExampleIndicators" class="carousel slide center-items" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>  
                  
                        <div class="carousel-inner">
                              <div class="carousel-item active justify-content-center align-items-center">
                                    <img src="../assets/images/homePage_fishes.jpeg" class="w-75" alt="Slide 1 Image">
                                    <div class="carousel-caption">
                                          <h4 class="text-center">Raise Awareness About Ocean Sustainability</h4>
                                          <p class="text-center p-4">Inform and educate the public about the detrimental effects of marine pollution on ocean ecosystems. We aim to inspire individuals to take a more active role in preserving our oceans.</p>
                                    </div>
                              </div>
                        
                              <div class="carousel-item justify-content-center align-items-center">
                                    <img src="../assets/images/homePage_turtle.jpg" class="w-75" alt="Slide 2 Image">
                                    <div class="carousel-caption">
                                          <h4 class="text-center">Provide a Platform for Activists to Organize Cleanup Projects for Rivers and Oceans</h4>
                                          <p class="text-center p-4">Empower activists and concerned citizens to initiate and coordinate cleanup efforts in their local communities, by serving as a hub for organizing events, sharing resources, and connecting individuals and groups dedicated to safeguarding the health of our rivers and oceans.</p>
                                    </div>
                              </div>
                  
                              <div class="carousel-item justify-content-center align-items-center">
                                    <img src="../assets/images/homePage_dolphins.jpg" class="w-75" alt="Slide 3 Image">
                                    <div class="carousel-caption">
                                          <h4 class="text-center">Establish a Platform for Donations Supporting Scientific Knowledge, Research, and Technology for Ocean Health</h4>
                                          <p class="text-center p-4">Facilitate contributions to initiatives aimed at advancing scientific research and technological innovation play, in hopes of driving financial support towards research projects, conservation efforts, and technologies that promote sustainable ocean management and rehabilitation.</p>
                                    </div>
                              </div>
                        </div>
                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                        </button>
            
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Next</span>
                        </button>
                  </div>
            </div>
      </div>

</template>

<script>
export default {
      name: 'homePage',
      mounted() {
            document.title = "Life Below Water";
      }
}

function reveal() {
      var reveals = document.querySelectorAll(".reveal");
      for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                  reveals[i].classList.add("active");
            } else {
                  reveals[i].classList.remove("active");
            }
      }
}
window.addEventListener("scroll", reveal);

// TODO: fix this function
document.addEventListener("DOMContentLoaded", function() {
      let dolphinGIF = document.getElementById("dolphinGIF");
      if (!dolphinGIF.playing) {
            dolphinGIF.play();
            setTimeout(() => {
                  dolphinGIF.style.display = "none";
            }, 2500);
      } 
});
document.addEventListener("click", function() {
      let dolphinGIF = document.getElementById("dolphinGIF");
      if (dolphinGIF.style.display === "none") {
            dolphinGIF.style.display = "block";
            setTimeout(() => {
                  dolphinGIF.style.display = "none";
            }, 2500);
      } else {
            dolphinGIF.style.display = "none";
      }
});
</script>

<style scoped>
body {
      overflow: hidden;
}

h1 {
      font-family: "glacial_bold", sans-serif;
      color: #fff;
      font-size: 56px;
      margin: 40px
}

h2, h3 {
      font-family: "glacial_bold", sans-serif;
      color: #0B3146;
}

h4 {
      font-family: "glacial_bold", sans-serif;
}

p {
      font-family: "glacial", sans-serif;
      color: #fff;
      margin: 20px;
      font-size: 18px;
}

.container {
      margin: 0;
      padding: 0;
}

.gradient-background {
      background-image: url('../assets/images/homePage_background.png');
      min-width: 100vw;
      background-size: cover;
      background-repeat: no-repeat; 
}

.center-items {
      display: flex;
      text-align: center;
      justify-content: center;
}

.vertical-center {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
}

.header-background {
      background-color: #0B3146;
      padding: 10px;
}

/* Sections */
.main-section {
      background-image: url('../assets/images/ocean.jpg'); 
      height: 100vh;
      background-size: cover;
      background-repeat: no-repeat; 
      margin: 0;
      padding: 0;
}

.title-section {
      position: absolute;
      top: 30%;
}

.responsive-title {
      color: #023047;
      line-height: 1em;
      padding: 0;
      margin: 0;
      font-family:'Times New Roman', Times, serif;
      font-size: 4vw;
      font-weight: 80;
      z-index: 1;
}

.dolphin-section {
      position: absolute;
      top: 20%;
}

.find-out-section {
      position: absolute;
      bottom: 5%;

      color: #fff; 
      font-size: 2vw;
}

.find-out-section img {
      padding: 0;
      width: 40px;
      height: auto;
}

.mission-section {
      color: white;
      margin-top: 200px; 
      padding-top: 100px;
}

.mission-logo {
      width: 400px;
      margin: 30px;
      padding: 40px;
}

.mission-card {
      background-color: #023047;
      border-radius: 20px;
      margin: 30px;
      padding: 40px;
}

.goals-section {
      color: #023047;
      margin-top: 30px;
}

/* Animations */
.typewriter {
      overflow: hidden;
      white-space: nowrap; 
      margin: 0 auto;
      animation: 
            typing 5s steps(50, end) 3s, 
            blink-caret 1s step-end infinite 3s;
      animation-fill-mode: both;
      animation-delay: 3s;
}

.typewriter2 {
      overflow: hidden;
      white-space: nowrap; 
      margin: 0 auto;
      animation: 
            typing2 5s steps(50, end) 3s, 
            blink-caret2 1s step-end infinite 3s;
      animation-fill-mode: both;
      animation-delay: 8s;
}

@media screen and (max-width: 576px) {
      .typewriter {
            font-size: 3vw; 
      }
      .typewriter2 {
            font-size: 3vw; 
      }
}

@keyframes typing {
      from {
            width: 0%;
      }
      to {
            width: 100%;
      }
}

@keyframes typing2 {
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
            border-right-color: black;
      }
}

@keyframes blink-caret2 {
      from, to {
            border-right-color: transparent;
      }
      50% {
            border-right-color: black;
      }
}

.float {
      width: 500px;
      animation: floatUpDown 2s ease-in-out infinite;
}

@keyframes floatUpDown {
      0%, 100% {
            transform: translateY(0);
      }
      50% {
            transform: translateY(-10px);
      }
}

.reveal {
      position: relative;
      opacity: 0;
}

.reveal.active {
      opacity: 1;
}

.active.fade-bottom {
      animation: fade-bottom 1s ease-in;
}

.active.fade-left {
      animation: fade-left 1s ease-in;
}

.active.fade-right {
      animation: fade-right 1s ease-in;
}

@keyframes fade-bottom {
      0% {
            transform: translateY(50px);
            opacity: 0;
      }
      100% {
            transform: translateY(0);
            opacity: 1;
      }
}

@keyframes fade-left {
      0% {
            transform: translateX(-100px);
            opacity: 0;
      }
      100% {
            transform: translateX(0);
            opacity: 1;
      }
}

@keyframes fade-right {
      0% {
            transform: translateX(100px);
            opacity: 0;
      }
      100% {
            transform: translateX(0);
            opacity: 1;
      }
}
</style>