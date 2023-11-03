<template>
    <div class="app gradient-background overflow-scroll">
        <div class="resultsBox" id="results">
            <div class="largeHeader">You are a <span class="animalName">{{ getAnimalName(maxAnimal) }}</span>!</div>
            <img class="animalImage move" :src="getAnimalImage(maxAnimal)">
            <div class="shortDesc">{{ getAnimalShortDesc(maxAnimal) }}</div>

            <div class="descBody">{{ getAnimalLongDesc(maxAnimal) }}</div>
            
            <div class="buttons-container">
                <button type="button" class="custom-btn" @click="generatePDF">Save Results</button>
            </div>
            
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

        <div class="resultsBox2 mb-5">
            <div class="largeHeader">
                How can we protect {{ getAnimalName(maxAnimal) }}s?
            </div>
    
            <div class="stepsOverall">
                <div class="stepBox">
                    <!-- card 1 -->
                    <div class="stepCount">
                        1
                    </div>
                    <div class="stepWords">
                        {{ getAnimalSteps(maxAnimal)[0] }}
                    </div>
                </div>
                <div class="stepBox">
                    <!-- card 2 -->
                    <div class="stepCount">
                        2
                    </div>
                    <div class="stepWords">
                        {{ getAnimalSteps(maxAnimal)[1] }}
                    </div>
                </div>
                <div class="stepBox">
                    <!-- card 3 -->
                    <div class="stepCount">
                        3
                    </div>
                    <div class="stepWords">
                        {{ getAnimalSteps(maxAnimal)[2] }}
                    </div>
                </div>
                
            </div>
            
            <div class="buttons-container">
                <router-link :to="{ name: 'getInvolved' }">
                    <button type="button" class="custom-btn">Get Involved</button>
                </router-link>
            </div>
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
        document.title = "Life Below Water";
    },
    data() {
        return {
            animals: {
                    turtle: {name: "Sea Turtle", shortDesc: "Gentle, Patient, Resilient", longDesc: "Sea turtles are gentle and resilient creatures that inhabit both tropical and temperate waters. They are known for their serenity and patience as they gracefully navigate the ocean.", img: turtleImage, steps: ["Participate in beach cleanup initiatives to remove plastic and other debris from nesting beaches.", "Reduce plastic consumption and properly dispose of plastic waste to prevent ingestion and entanglement.", "Support sea turtle conservation projects and awareness campaigns."]},
                    dolphin: {name: "Dolphin", shortDesc: "Intelligent, Social, Adventurous", longDesc: "Dolphins are inquisitive, intelligent, and social creatures that thrive in the dynamic world of the oceans. They are known for their adventurous spirit and strong social bonds.", img: dolphinImage, steps: ["Advocate for the protection of marine environments and reduced ocean pollution.", "Participate in research initiatives focused on dolphin behavior and well-being.", "Report any incidents of illegal fishing or harmful activities that affect dolphins."]},
                    otter: {name: "Sea Otter", shortDesc: "Playful, Energetic, Curious", longDesc: "Sea otters are playful and energetic creatures that inhabit both freshwater and marine environments. They are known for their curiosity and their ability to adapt to different environments.", img: otterImage, steps: ["Be mindful of boat traffic in sea otter habitats and follow regulations to prevent collisions.", "Avoid using harmful chemicals and pollutants that can harm sea otters and their environment.", "Educate others about the importance of kelp forests and rocky shore ecosystems to sea otters."]},
                    penguin: {name: "Penguin", shortDesc: "Resilient, Resourceful, Adaptable", longDesc: "Penguins are resilient and resourceful creatures that thrive in polar regions with icy waters. They are known for their adaptability and their ability to thrive in harsh environments.", img: penguinImage, steps: ["Reduce your carbon footprint to help combat climate change, which affects penguin habitats.", "Participate in campaigns to reduce plastic waste and prevent plastic pollution in the ocean.", "Stay informed about the impact of overfishing on penguin food sources and support sustainable fishing practices."]},
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
        getAnimalSteps(animal) {
            return this.animals[animal].steps;
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
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
}

/* general boxes */
.resultsBox {
    text-align: center;
    background-color: #F7F9FB;
    color: #023047;
    padding: 100px;
    border-radius: 20px;
    height: 600px;
    width: 80%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
}

.resultsBox2 {
    text-align: center;
    background-color: #F7F9FB;
    color: #023047;
    border-radius: 20px;
    height: 600px;
    width: 80%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
}

.buttons-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    min-width: 400px;
    margin-bottom: 20px;
}

.descBody {
    padding: 30px;
    font-size: 1.5vw;
}

/* text styling */
.largeHeader {
    font-size: 3vw;
    font-weight: bold;
}

.shortDesc {
    margin: auto;
    font-size: 1.75vw;
    height: fit-content;
    width: fit-content;
    background-color: #F7C59F;
    color: #023047;
    padding: 10px;
    border-radius: 20px;
}

/* animal styling */
.animalName {
    color: #5085A5;
}

.animalImage {
    height: 40%;
    margin: 20px;
}

/* step styling */
.stepsOverall {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
}

.stepWords {
    font-size: 1.5vw;
    font-weight: 900;
    display: flex;
    align-items: center;
}

.stepBox {
    border-radius: 20px;
    border: #5085A5 3px solid;
    padding: 20px;
    width: 25%;
    height: 100%;
}

.stepCount {
    margin: auto;
    padding: 10px 20px 10px 20px;
    border-radius: 20px;
    background: #F7C59F;
    color: #023047;
    height: fit-content;
    width: fit-content;
    text-align: center;
    font-size: 2vw;
    font-weight: 900;
}

/* animation styling */
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