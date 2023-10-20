<template>
      <div class="app">
            <div class="map-container">
                  <img src="../assets/maps/world.svg" alt="World Map" class="map-image">
            </div>
      </div>
</template>

<script>
      import axios from "axios"

      export default {
            name: "IMaps",
            mounted() {
                  // can drag around to play with it
                  const mapImage = document.querySelector(".map-image")
                  let isDragging = false
                  let startX, startY, translateX, translateY

                  mapImage.addEventListener("mousedown", e => {
                        isDragging = true
                        startX = e.clientX - mapImage.offsetLeft
                        startY = e.clientY - mapImage.offsetTop
                        translateX = mapImage.style.transform ? parseInt(mapImage.style.transform.split("(")[1].split(")")[0].split(",")[0]) : 0
                        translateY = mapImage.style.transform ? parseInt(mapImage.style.transform.split("(")[1].split(")")[0].split(",")[1]) : 0
                  });

                  mapImage.addEventListener("mouseup", () => {
                        isDragging = false
                  });

                  mapImage.addEventListener("mousemove", e => {
                        if (!isDragging) return
                        e.preventDefault()
                        const x = e.clientX - mapImage.offsetLeft
                        const y = e.clientY - mapImage.offsetTop
                        const translateXNew = translateX + x - startX
                        const translateYNew = translateY + y - startY
                        mapImage.style.transform = `translate(${translateXNew}px, ${translateYNew}px)`
                  });

                  // fetching the data from the world.svg file
                  axios("../assets/maps/world.svg")
                        .then(response => console.log(response.data))
                        .catch(error => console.error(error))

                  document.title = "Interactive Map"
            }
      }
</script>

<style>
      .app {
            background-color: #5085a5;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
      }

      .map-container {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
      }

      .map-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            cursor: grab;
            user-select: none;
      }

      .map-image:active {
            cursor: grabbing;
      }

      .country {
            fill: white;
      }

      .country:hover {
            fill: pink;
      }
</style>
