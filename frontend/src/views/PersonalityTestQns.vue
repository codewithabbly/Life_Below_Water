<template>
    <div class="app gradient-background">
        <div class="container m-5">
            <div class="row m-5" v-for="(qn, index) in testQuestions" :key="index">
                <div class="overallBox container text-center">
                    <div class="row m-4">
                        <div class="largeHeader">{{ qn.question }}</div>
                    </div>
            
                    <!-- first row of questions -->
                    <div class="row my-1 m-md-4">
                        <div class="col-md-1"></div>
                        <button class="col-md-4 p-4 my-3 m-md-0 questionBox" :class="{ active: buttons[index].turtle }" @click="toggleActive('turtle', index)" :disabled="buttons[index].dolphin || buttons[index].otter || buttons[index].penguin">
                            {{ qn.options.turtle }}
                        </button>
                        <div class="col-md-2"></div>
                        <button class="col-md-4 p-4 my-3 m-md-0 questionBox" :class="{ active: buttons[index].dolphin }" @click="toggleActive('dolphin', index)" :disabled="buttons[index].turtle || buttons[index].otter || buttons[index].penguin">
                            {{ qn.options.dolphin }}
                        </button>
                        <div class="col-md-1"></div>
                    </div>
                    <!-- second row of questions -->
                    <div class="row my-1 m-md-4">
                        <div class="col-md-1"></div>
                        <button class="col-md-4 p-4 my-3 m-md-0 questionBox" :class="{ active: buttons[index].otter }" @click="toggleActive('otter', index)" :disabled="buttons[index].turtle || buttons[index].dolphin || buttons[index].penguin">
                            {{ qn.options.otter}}
                        </button>
                        <div class="col-md-2"></div>
                        <button class="col-md-4 p-4 my-3 m-md-0 questionBox" :class="{ active: buttons[index].penguin }" @click="toggleActive('penguin', index)" :disabled="buttons[index].turtle || buttons[index].dolphin || buttons[index].otter">
                            {{ qn.options.penguin}}
                        </button>
                        <div class="col-md-1"></div>
                    </div>
            
                </div>
            </div>
            <div class="row m-5 submit">
                <div class="col-md-4"></div>
                <div class="col-md-4 submit">
                    <router-link :to="{ name: 'personalityTestResults', params: { maxAnimal: calcResult() } }">
                        <button type="button" class="custom-btn">Submit Test</button>
                    </router-link>
                </div>
                <div class="col-md-4"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "personalityTestQns",
    mounted() {
        document.title = "Personality Test Questions";
    },
    data() {
        return {
            testQuestions: [{question: "Which landscape do you find most appealing?",
                            options: {turtle: "Sandy beaches and tropical islands.",
                                    dolphin: "Coral reefs and colourful underwater worlds.",
                                    otter: "Coastal shores with kelp forests.",
                                    penguin: "Icebergs and snowy tundras."}},
                            {question: "How do you handle challenges or obstacles in your life?",
                            options: {turtle: "With a gentle and steady approach.",
                                    dolphin: "By exploring and adapting.",
                                    otter: "Playfully and with creativity.",
                                    penguin: "With determination and perseverance."}},
                            {question: "How do you socialise and connect with others?",
                            options: {turtle: "Enjoying peaceful solitude.",
                                    dolphin: "Forming close-knit groups.",
                                    otter: "Interacting playfully and energetically.",
                                    penguin: "Adapting to various social circles."}},
                            {question: "Which environmental issue concerns you the most?",
                            options: {turtle: "Plastic pollution and its impact on marine life.",
                                    dolphin: "Coral bleaching and the threat to coral reefs.",
                                    otter: "Oil spills and coastal habitat destruction.",
                                    penguin: "Climate change and its effect on polar ecosystems."}},
                            {question: "What’s your ideal vacation activity?",
                            options: {turtle: "Lounging on a tropical beach with a good book.",
                                    dolphin: "Going on an underwater adventure to explore reefs.",
                                    otter: "Participating in water sports like surfing or kayaking.",
                                    penguin: "Embarking on an expedition to polar regions."}},
                            {question: "What’s your favourite way to unwind after a long day?",
                            options: {turtle: "Taking a nap or meditating.",
                                    dolphin: "Going for a swim or a run.",
                                    otter: "Playing games and being sociable.",
                                    penguin: "Solving challenges and being productive."}},
                            {question: "What’s your outlook on life?",
                            options: {turtle: "Content and at ease with the present.",
                                    dolphin: "Filled with curiosity and exploration.",
                                    otter: "Joyful and full of humour and play.",
                                    penguin: "Focused on overcoming challenges and thriving."}},
                            {question: "Choose a marine-inspired quote that resonates with you.",
                            options: {turtle: "In the waves of change, we find our true direction.",
                                    dolphin: "The sea, once it casts its spell, holds one in its net of wonder forever.",
                                    otter: "Life is better when you’re surfing.",
                                    penguin: "Life’s a journey that’s homeward bound."}}
            ],
            buttons: [{turtle: false, dolphin: false, otter: false, penguin: false},
                        {turtle: false, dolphin: false, otter: false, penguin: false},
                        {turtle: false, dolphin: false, otter: false, penguin: false},
                        {turtle: false, dolphin: false, otter: false, penguin: false},
                        {turtle: false, dolphin: false, otter: false, penguin: false},
                        {turtle: false, dolphin: false, otter: false, penguin: false},
                        {turtle: false, dolphin: false, otter: false, penguin: false},
                        {turtle: false, dolphin: false, otter: false, penguin: false},
                    ],
            score: {turtle: 0, dolphin: 0, otter: 0, penguin: 0},
        }
    },
    methods: {
        toggleActive(animal, index) {
            console.log(index);
            console.log(animal);
            this.buttons[index][animal] = !this.buttons[index][animal];
            this.computeScore(animal, index);
        },
        computeScore(animal, index) {
            if (this.buttons[index][animal]) {
                if (animal === "turtle") {
                    this.score.turtle += 1;
                } else if (animal === "dolphin") {
                    this.score.dolphin += 1;
                } else if (animal === "otter") {
                    this.score.otter += 1;
                } else if (animal === "penguin") {
                    this.score.penguin += 1;
                }
            } else {
                if (animal === "turtle") {
                    this.score.turtle -= 1;
                } else if (animal === "dolphin") {
                    this.score.dolphin -= 1;
                } else if (animal === "otter") {
                    this.score.otter -= 1;
                } else if (animal === "penguin") {
                    this.score.penguin -= 1;
                }
            }
            
            console.log(this.score);
        },
        calcResult() {
            let maxScore = -1;
            let maxAnimal = null;

            for (const animal in this.score) {
                if (this.score[animal] > maxScore) {
                    maxScore = this.score[animal];
                    maxAnimal = animal;
                }
            }

            console.log(maxAnimal);

            return maxAnimal;
        }
    },
    
}
</script>

<style scoped>
.app {
    min-height: 100vh;
    font-family: "glacial", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overallBox {
    background-color: #023047;
    color: #F7F9FB;
    border-radius: 20px;
    height: 80%;
    width: 80%;
    display: block;
    padding: 30px;
}

.questionBox {
    background-color: #F7F9FB;
    border-radius: 20px;
    border: 2px solid #5085A5;
    margin: auto;
    font-size: 1em;
    font-weight: bold;
    color: #5085A5;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 992px) {
    .questionBox {
        font-size: 0.75em;
    }
}

.questionBox:hover {
    background-color: #5085A5;
    color: #F7F9FB;
}

.active {
    background-color: #5085A5;
    color: #F7F9FB;
}

.questionBox:disabled {
    background-color: #d4d3d3;
    color: #5085A5;
}

.largeHeader {
    font-size: 2.5vw;
    font-weight: bold;
}

.gradient-background {
    background-image: url('../assets/images/homePage_background.png');
    min-width: 100vw;
    min-height: 100vh;
    background-size: cover;
    background-repeat: repeat;
}

.submit {
    display: flex;
    justify-content: center;
}
</style>