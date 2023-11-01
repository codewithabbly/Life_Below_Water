<template>
    <div class="app gradient-background">
        <div class="largeHeader">
            How can we protect {{ getAnimalName(maxAnimal) }}s?
        </div>

        <div>
            <ol>
                <li v-for="(step, index) in getAnimalSteps(maxAnimal)" :key="index">
                    {{ step }}
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    name: "personalityTestProtect",
    mounted() {
        console.log("working");
        document.title = "How do we protect them?";
    },
    data() {
        return {
            animals: {
                turtle: {name: "Sea Turtle", steps: ["Participate in beach cleanup initiatives to remove plastic and other debris from nesting beaches.", "Reduce plastic consumption and properly dispose of plastic waste to prevent ingestion and entanglement.", "Support sea turtle conservation projects and awareness campaigns."]},
                dolphin: {name: "Dolphin", steps: ["Advocate for the protection of marine environments and reduced ocean pollution.", "Participate in research initiatives focused on dolphin behavior and well-being.", "Report any incidents of illegal fishing or harmful activities that affect dolphins."]},
                otter: {name: "Sea Otter", steps: ["Be mindful of boat traffic in sea otter habitats and follow regulations to prevent collisions.", "Avoid using harmful chemicals and pollutants that can harm sea otters and their environment.", "Educate others about the importance of kelp forests and rocky shore ecosystems to sea otters."]},
                penguin: {name: "Penguin", steps: ["Reduce your carbon footprint to help combat climate change, which affects penguin habitats.", "Participate in campaigns to reduce plastic waste and prevent plastic pollution in the ocean.", "Stay informed about the impact of overfishing on penguin food sources and support sustainable fishing practices."]}
            },
            maxAnimal: this.$route.params.maxAnimal
        }
    },
    methods: {
        getAnimalName(animal) {
            return this.animals[animal].name;
        },
        getAnimalSteps(animal) {
            return this.animals[animal].steps;
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

.largeHeader {
    font-size: 4vw;
    font-weight: bold;
}

</style>