<template>
  <div class="container-fluid" id="loading">
    <div class="row d-flex p-0 align-items-center justify-content-center">
      <h1 class="d-flex align-items-center justify-content-center">
        Sorry, we cannot fish for details now.<br />Why not go for a swim and
        cast your line later?
      </h1>
    </div>
    <div class="row d-flex p-0 align-items-center justify-content-center">
      <img
        class="img"
        src="../assets/images/otterSwim.gif"
        alt="fishing..."
        style="width: 30rem; height: auto; margin-top: 10px; z-index: 1"
      />
    </div>
    <div class="row d-flex align-items-center justify-content-center">
      <img class="seaweed-left" src="../assets/images/seaweed.png" />
      <img class="seaweed-right" src="../assets/images/seaweed.png" />

      <section class="sticky">
        <div class="bubbles">
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "errorScreen",
};
</script>

<style>
#loading {
  background-color: #8fc1e3;
  height: 100vh;
  width: 100%;

  position: relative;
}

#loading div h1 {
  padding-top: 150px;
  padding-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  position: relative;
  z-index: 1;
}

.seaweed-left {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30%;
}

.seaweed-right {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30%;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

/* start of CSS for bubble animation */
.bubbles {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  top: 0;
  left: 0;
}
.bubble {
  position: absolute;
  bottom: -100px;
  width: 40px;
  height: 40px;
  background: #f3ebdf;
  border-radius: 50%;
  opacity: 0.5;
  animation: rise 10s infinite ease-in;
}

.bubble:nth-child(1) {
  width: 40px;
  height: 40px;
  left: 10%;
  animation-duration: 8s;
}

.bubble:nth-child(2) {
  width: 20px;
  height: 20px;
  left: 20%;
  animation-duration: 5s;
  animation-delay: 1s;
}

.bubble:nth-child(3) {
  width: 50px;
  height: 50px;
  left: 35%;
  animation-duration: 7s;
  animation-delay: 2s;
}

.bubble:nth-child(4) {
  width: 80px;
  height: 80px;
  left: 50%;
  animation-duration: 11s;
  animation-delay: 0s;
}

.bubble:nth-child(5) {
  width: 35px;
  height: 35px;
  left: 55%;
  animation-duration: 6s;
  animation-delay: 1s;
}

.bubble:nth-child(6) {
  width: 45px;
  height: 45px;
  left: 65%;
  animation-duration: 8s;
  animation-delay: 3s;
}

.bubble:nth-child(7) {
  width: 90px;
  height: 90px;
  left: 70%;
  animation-duration: 12s;
  animation-delay: 2s;
}

.bubble:nth-child(8) {
  width: 25px;
  height: 25px;
  left: 80%;
  animation-duration: 6s;
  animation-delay: 2s;
}

.bubble:nth-child(9) {
  width: 15px;
  height: 15px;
  left: 70%;
  animation-duration: 5s;
  animation-delay: 1s;
}

.bubble:nth-child(10) {
  width: 90px;
  height: 90px;
  left: 25%;
  animation-duration: 10s;
  animation-delay: 4s;
}

@keyframes rise {
  0% {
    bottom: -100px;
    transform: translateX(0);
  }
  50% {
    transform: translate(100px);
  }
  100% {
    bottom: 1080px;
    transform: translateX(-200px);
  }
}
/** end of css for bubble */
</style>
