<template>
      <div style="height: 100vh; width: 100%;">
            <l-map :zoom="zoom" :center="center" :options="mapOptions">
                  <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                  <l-marker 
                        v-for="(item, index) in waterData" 
                        :key="index" 
                        :lat-lng="item.latLng" 
                        @update:click="selectedCity = item"
                        >
                        <l-popup v-if="selectedCity === item">
                              <h2>{{ item.city }}</h2>
                              <p>{{ item.water_history }}</p>
                              <p>Water pH Level: {{ item.water_pH_level }}</p>
                        </l-popup>
                  </l-marker>
            </l-map>
      </div>
</template>

<script>
      import { LMap, LTileLayer } from 'vue3-leaflet'
      import { server } from "../utils/helper.js"
      import axios from 'axios'
      import 'leaflet/dist/leaflet.css'

      export default {
            name: 'IMaps',
            components: {
                  LMap,
                  LTileLayer,
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
                  };
            },
            async created() {
                  this.getData()
                  for (let item of this.waterData) {
                        item.latLng = await this.getLatLng(item.city)
                  }
            },
            methods: {
                  getData() {
                        axios.get(`${server.baseURL}/water_data`)
                              .then(
                                    (response) => {
                                          this.waterData = response.data.data.data_list
                                    }
                              ) 
                              .catch(
                                    (error) => {
                                          console.error(error)
                                    }
                              )
                  },
                  async getLatLng(city) {
                        try {
                              const response = await axios.get("https://api.api-ninjas.com/v1/geocoding?city=" + city, {
                                    headers: {
                                          'X-Api-Key': 'FEpzYx8KU1vP+l8s/9IZow==WBoyeHhJnShjOtjq'
                                    }
                              });

                              this.latLngData = response.data
                              const firstLocation = this.latLngData[0]
                              this.latitude= firstLocation.latitude
                              this.longitude = firstLocation.longitude
                        } catch (error) {
                              console.error(error);
                        }
                  }
            },
      }
</script>

<style>
      .l-map {
            height: 100%;
            width: 100%;
      }
</style>