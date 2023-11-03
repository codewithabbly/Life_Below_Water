<template>
      <div style="height: 100vh; width: 100%;">
            <l-map :zoom="zoom" :center="center" :options="mapOptions">
                  <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                  <l-marker v-for="marker in markers" :key="marker.city" :lat-lng="marker.latLng">
                        <l-popup>
                              <div>
                              <h3>{{ marker.city }}</h3>
                              <p><b>Water History</b>: {{ marker.waterHistory }}</p>
                              <p><b>pH Level</b>: {{ marker.pHLevel }}</p>
                              </div>
                        </l-popup>
                  </l-marker>
            </l-map>
            <div class="legend">
                  <p>Hello there! 👋 </p>
                  <p>Here, you can zoom out and click on the markers 📍 to view data on the history of water bodies in a city and their respective pH levels. </p>
                  <p>It takes about 10 seconds for the data to fully load, so we'll appreciate your patience in waiting!</p>
            </div>
      </div>
</template>

<script>
      import { LMap, LTileLayer, LMarker, LPopup } from 'vue3-leaflet'
      import { server } from "../utils/helper.js"
      import axios from 'axios'
      import 'leaflet/dist/leaflet.css'

      export default {
            name: 'IMaps',
            mounted() {
                  document.title = "Life Below Water";
            },
            components: {
                  LMap,
                  LTileLayer,
                  LMarker,
                  LPopup
            },
            data() {
                  return {
                        zoom: 13,
                        center: [1.3521, 103.8198],
                        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                        attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
                        mapOptions: {
                              maxBounds: [
                                    [-90, -180],
                                    [90, 180]
                              ]
                        },
                        waterData: [],
                        latLngData: [],
                        latitude: null,
                        longitude: null,
                        selectedCity: null,
                        markers: [],
                  };
            },
            async created() {
                  this.getData()
                  for (let item of this.waterData) {
                        item.latLng = await this.getLatLng(item.city)
                  }
            },
            methods: {
                  async getData() {
                        try {
                              const response = await axios.get(`${server.baseURL}/water_data`)
                              this.waterData = response.data.data.data_list
                              // console.log(this.waterData)
      
                              for (let item of this.waterData) {
                                    const latLng = await this.getLatLng(item.city)
                                    item.latitude= latLng.latitude
                                    item.longitude = latLng.longitude
                              }
      
                              this.plotMarkers()
                        } catch (error) {
                              console.error(error)
                        }
                  },
                  async getLatLng(city) {
                        try {
                              const response = await axios.get(`https://api.api-ninjas.com/v1/geocoding?city=${city}`, {
                                    headers: {
                                          'X-Api-Key': 'FEpzYx8KU1vP+l8s/9IZow==WBoyeHhJnShjOtjq'
                                    }
                              });

                              // console.log(response.data[0])
                              return response.data[0]
                        } catch (error) {
                              console.error(error);
                        }
                  },
                  plotMarkers() {
                        this.markers = this.waterData.map(item => ({
                              latLng: [item.latitude, item.longitude],
                              city: item.city,
                              waterHistory: item.water_history,
                              pHLevel: item.water_pH_level
                        }))
                        // console.log(this.markers)
                  }
            },
      }
</script>

<style>
      .l-map {
            height: 100%;
            width: 100%;
      }
      .legend {
            position: absolute;
            bottom: 10px;
            right: 10px;
            background: white;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
            z-index: 1000;
            width: 300px;
      }
</style>