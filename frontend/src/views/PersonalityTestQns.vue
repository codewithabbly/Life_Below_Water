<template>
    <div class="app gradient-background">
        <div class="overallBox container text-center">
            <div class="row m-5">
                <div class="largeHeader">Q1: Which landscape do you find most appealing?</div>
            </div>
            
            <!-- first row of questions -->
            <div class="row m-4">
                <div class="col-1"></div>

                <button class="col-4 p-5 questionBox">
                    Sandy beaches and tropical islands.
                </button>

                <div class="col-2"></div>

                <button class="col-4 p-5 questionBox">
                    Coral reefs and colourful underwater worlds.
                </button>

                <div class="col-1"></div>
            </div>

            <!-- second row of questions -->
            <div class="row m-4">
                <div class="col-1"></div>

                <button class="col-4 p-5 questionBox">
                    Coastal shores with kelp forests.
                </button>

                <div class="col-2"></div>

                <button class="col-4 p-5 questionBox">
                    Icebergs and snowy tundras.
                </button>

                <div class="col-1"></div>
            </div>

            
        </div>
    </div>
</template>

<script>
export default {
    name: "personalityTestQns",
    mounted() {
        document.title = "Personality Test Questions";
    }
    
}
</script>

<style scoped>
.app {
    height: 100vh;
    font-family: "glacial", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overallBox {
    background-color: #023047;
    color: #F7F9FB;
    margin: auto;
    border-radius: 20px;
    height: 80%;
    width: 80%;
}

.questionBox {
    background-color: #F7F9FB;
    border-radius: 20px;
    border: 2px solid #5085A5;
    margin: auto;
    font-size: 1.5vw;
    font-weight: bold;
    color: #5085A5;
}

.questionBox:hover {
    background-color: #5085A5;
    color: #F7F9FB;
}

.questionBox:active {
    background-color: #5085A5;
    color: #F7F9FB;
}

.largeHeader {
    font-size: 2.5vw;
    font-weight: bold;
}


</style>