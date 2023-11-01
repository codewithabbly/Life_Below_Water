<template>
    <div class="app gradient-background">
        <div class="largeBox">
            <div class="largeHeader">What marine animal are you?</div>
            <div class="medHeader">Take this quick personality test and find out what marine animal you are!</div>

            <router-link :to="{ name: 'personalityTestQns'}">
                <button type="button" class="custom-btn">Click to begin</button>
            </router-link>
            
            <img class="seaweed-left" src="../assets/images/seaweed.png">
            <img class="seaweed-right" src="../assets/images/seaweed.png">

            
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
    name: "personalityTest",
    mounted() {
        document.title = "Personality Test";
    }
}
</script>

<style scoped>
.app {
    font-family: "glacial", sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
}

.largeBox {
    text-align: center;
    background-color: #F7F9FB;
    color: #023047;
    margin: auto;
    border-radius: 20px;
    height: 80%;
    width: 80%;
    position: relative;
}

.largeHeader {
    font-size: 4vw;
    font-weight: bold;
    margin-top: 15%;
}

.medHeader {
    margin: auto;
    font-size: 2.5vw;
    width: 80%;
}

button {
    margin: 10%;
}

.seaweed-left {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 20%;
}

.seaweed-right {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20%;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
}

.gradient-background {
    background-image: url('../assets/images/homePage_background.png');
    min-width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: repeat; 
  }

/* start of CSS for bubble animation */
.bubbles{
    position:absolute;
    width:100%;
    height: 100%;
    z-index:0;
    overflow:hidden;
    top:0;
    left:0;
}
.bubble{
    position: absolute;
    bottom:-100px;
    width:40px;
    height: 40px;
    background:#8FC1E3;
    border-radius:50%;
    opacity:0.5;
    animation: rise 10s infinite ease-in;
}

.bubble:nth-child(1){
    width:40px;
    height:40px;
    left:10%;
    animation-duration:8s;
}

.bubble:nth-child(2){
    width:20px;
    height:20px;
    left:20%;
    animation-duration:5s;
    animation-delay:1s;
}

.bubble:nth-child(3){
    width:50px;
    height:50px;
    left:35%;
    animation-duration:7s;
    animation-delay:2s;
}

.bubble:nth-child(4){
    width:80px;
    height:80px;
    left:50%;
    animation-duration:11s;
    animation-delay:0s;
}

.bubble:nth-child(5){
    width:35px;
    height:35px;
    left:55%;
    animation-duration:6s;
    animation-delay:1s;
}

.bubble:nth-child(6){
    width:45px;
    height:45px;
    left:65%;
    animation-duration:8s;
    animation-delay:3s;
}

.bubble:nth-child(7){
    width:90px;
    height:90px;
    left:70%;
    animation-duration:12s;
    animation-delay:2s;
}

.bubble:nth-child(8){
    width:25px;
    height:25px;
    left:80%;
    animation-duration:6s;
    animation-delay:2s;
}

.bubble:nth-child(9){
    width:15px;
    height:15px;
    left:70%;
    animation-duration:5s;
    animation-delay:1s;
}

.bubble:nth-child(10){
    width:90px;
    height:90px;
    left:25%;
    animation-duration:10s;
    animation-delay:4s;
}

@keyframes rise{
0%{
    bottom:-100px;
    transform:translateX(0);
}
50%{
    transform:translate(100px);
}
100%{
    bottom:1080px;
    transform:translateX(-200px);
}
}

</style>


