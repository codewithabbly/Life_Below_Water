<template>
    <div class="app gradient-background">
        <div class="resultsBox">
            <div class="largeHeader">You are a <span class="animalName">{{ getAnimalName(maxAnimal) }}</span></div>
            <img class="animalImage move" :src="getAnimalImage(maxAnimal)">
            <div class="medHeader">{{ getAnimalShortDesc(maxAnimal) }}</div>

            <div class="descBody">{{ getAnimalLongDesc(maxAnimal) }}</div>
            
            <router-link :to="{ name: 'personalityTestProtect', params: { maxAnimal: maxAnimal } }">
                <button type="button" class="custom-btn special-btn">Learn More</button>
            </router-link>
            
            <button type="button" class="custom-btn">Share Results</button>

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
    name: "personalityTestResults",
    mounted() {
        console.log(this.maxAnimal);
        document.title = "Personality Test Results";
    },
    data() {
        return {
            animals: {
                    turtle: {name: "Sea Turtle", shortDesc: "Gentle, Patient, Resilient", longDesc: "Sea turtles are gentle and resilient creatures that inhabit both tropical and temperate waters. They are known for their serenity and patience as they gracefully navigate the ocean.", img: "../assets/images/turtle2.png"},
                    dolphin: {name: "Dolphin", shortDesc: "Intelligent, Social, Adventurous", longDesc: "Dolphins are inquisitive, intelligent, and social creatures that thrive in the dynamic world of the oceans. They are known for their adventurous spirit and strong social bonds.", img: "../assets/images/dolphin2.png"},
                    otter: {name: "Sea Otter", shortDesc: "Playful, Energetic, Curious", longDesc: "Sea otters are playful and energetic creatures that inhabit both freshwater and marine environments. They are known for their curiosity and their ability to adapt to different environments.", img: "../assets/images/otter.png"},
                    penguin: {name: "Penguin", shortDesc: "Resilient, Resourceful, Adaptable", longDesc: "Penguins are resilient and resourceful creatures that thrive in polar regions with icy waters. They are known for their adaptability and their ability to thrive in harsh environments.", img: "../assets/images/penguin.png"},
            },
            maxAnimal: this.$route.params.maxAnimal
        }
    },
    methods: {
        getAnimalName(animal) {
            return this.animals[animal].name;
        },
        getAnimalImage(animal) {
            console.log(this.animals[animal].img);
            return this.animals[animal].img;
        },
        getAnimalShortDesc(animal) {
            return this.animals[animal].shortDesc;
        },
        getAnimalLongDesc(animal) {
            return this.animals[animal].longDesc;
        }
    }
}
</script>

<style scoped>
.gradient-background {
    background-image: url('../assets/images/homePage_background.png');
    min-width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: repeat; 
  }

.app {
    font-family: "glacial", sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
}

.resultsBox {
    text-align: center;
    background-color: #F7F9FB;
    color: #023047;
    margin: auto;
    border-radius: 20px;
    height: 70%;
    width: 80%;
    position: relative;
}

.largeHeader {
    font-size: 4vw;
    font-weight: bold;
}

.medHeader {
    margin: auto;
    font-size: 2.5vw;
    width: 80%;
}

.descBody {
    padding: 30px;
    font-size: 1.5vw;
}
button {
    margin: 10%;
}

.animalName {
    color: #5085A5;
}

.animalImage {
    width: 20%;
}

.move {
    animation: MoveUpDown 5s linear infinite;}
  
  @keyframes MoveUpDown {
    0%, 100% {
      bottom: 0;
    }
    50% {
      bottom: 30px;
    }
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