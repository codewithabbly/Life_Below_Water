<template>
    <div class="app gradient-background">
        <div class="resultsBox mt-5" id="results">
            <div class="largeHeader">You are a <span class="animalName">{{ getAnimalName(maxAnimal) }}</span>!</div>
            <img class="animalImage move" :src="getAnimalImage(maxAnimal)">
            <div class="shortDesc">{{ getAnimalShortDesc(maxAnimal) }}</div>

            <div class="descBody">{{ getAnimalLongDesc(maxAnimal) }}</div>
            
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

        <div class="buttons-container mt-4">
            <button type="button" class="custom-btn" @click="generatePDF">Save Results</button>

            <router-link :to="{ name: 'personalityTestProtect', params: { maxAnimal: maxAnimal } }">
                <button type="button" class="custom-btn">Learn More</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import turtleImage from "@/assets/images/turtle2.png";
import dolphinImage from "@/assets/images/dolphin2.png";
import otterImage from "@/assets/images/otter.png";
import penguinImage from "@/assets/images/penguin.png";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default {
    name: "personalityTestResults",
    mounted() {
        console.log(this.maxAnimal);
        document.title = "Personality Test Results";
    },
    data() {
        return {
            animals: {
                    turtle: {name: "Sea Turtle", shortDesc: "Gentle, Patient, Resilient", longDesc: "Sea turtles are gentle and resilient creatures that inhabit both tropical and temperate waters. They are known for their serenity and patience as they gracefully navigate the ocean.", img: turtleImage},
                    dolphin: {name: "Dolphin", shortDesc: "Intelligent, Social, Adventurous", longDesc: "Dolphins are inquisitive, intelligent, and social creatures that thrive in the dynamic world of the oceans. They are known for their adventurous spirit and strong social bonds.", img: dolphinImage},
                    otter: {name: "Sea Otter", shortDesc: "Playful, Energetic, Curious", longDesc: "Sea otters are playful and energetic creatures that inhabit both freshwater and marine environments. They are known for their curiosity and their ability to adapt to different environments.", img: otterImage},
                    penguin: {name: "Penguin", shortDesc: "Resilient, Resourceful, Adaptable", longDesc: "Penguins are resilient and resourceful creatures that thrive in polar regions with icy waters. They are known for their adaptability and their ability to thrive in harsh environments.", img: penguinImage},
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
        },
        generatePDF() {
            const pdf = new jsPDF();
            const toPrint = document.getElementById('results');

            html2canvas(toPrint).then((canvas) => {
                const imgToPrint = canvas.toDataURL('image/png');
                pdf.addImage(imgToPrint, 'PNG', 10, 10, 190, 0);
                pdf.save('results.pdf')
            })
        }
    }
}
</script>

<style scoped>
.gradient-background {
    background-image: url('../assets/images/homePage_background.png');
    min-width: 100vw;
    min-height: 100vh;
    background-size: cover;
    background-repeat: repeat;
}

.app {
    font-family: "glacial", sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
}

.resultsBox {
    text-align: center;
    background-color: #F7F9FB;
    color: #023047;
    padding: 30px;
    border-radius: 20px;
    height: 70%;
    width: 80%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.buttons-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    min-width: 400px;
}

.largeHeader {
    font-size: 4vw;
    font-weight: bold;
}

.shortDesc {
    margin: auto;
    font-size: 2.5vw;
    height: fit-content;
    width: fit-content;
    background-color: #5085A5;
    color: #F7F9FB;
    padding: 10px;
    border-radius: 20px;
}

.descBody {
    padding: 30px;
    font-size: 1.5vw;
}

.animalName {
    color: #5085A5;
}

.animalImage {
    height: 40%;
    margin: 20px;
}

.move {
    animation: rotate 4s infinite;
}

@keyframes rotate {
    0%, 100% { transform: rotate(-10deg); }
    50% { transform: rotate(15deg); }
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