<template>
      <div style="height: 100vh; width: 100%;">
            <l-map :zoom="zoom" :center="center" :options="mapOptions">
                  <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                  <l-marker :lat-lng="center"></l-marker>
            </l-map>
      </div>
</template>

<script>
      import { LMap, LTileLayer, LMarker } from 'vue3-leaflet'

      export default {
            name: 'IMaps',
            components: {
                  LMap,
                  LTileLayer,
                  LMarker
            },
            data() {
                  return {
                        zoom: 13,
                        center: [51.505, -0.09],
                        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                        attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
                        mapOptions: {
                              maxBounds: [
                                    [-90, -180],
                                    [90, 180]
                              ]
                        }
                  };
            },
            methods: {
                  setCurrentLocation() {
                        if (navigator.geolocation) {
                              navigator.geolocation.getCurrentPosition((position) => {
                              this.center = [position.coords.latitude, position.coords.longitude]
                        })
                        } else {
                              console.error("Geolocation is not supported by this browser.")
                        }
                  }
            },
            created() {
                  this.setCurrentLocation()
            }
      }
</script>

<style>
      .l-map {
            height: 100%;
            width: 100%;
      }
</style>