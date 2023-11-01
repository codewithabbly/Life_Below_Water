<template>
      <div style="height: 100vh; width: 100%;">
            <l-map :zoom="zoom" :center="center">
                  <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                  <l-marker :lat-lng="marker"></l-marker>
            </l-map>
      </div>
</template>

<script>
      import { LMap, LTileLayer, LMarker } from 'vue3-leaflet';

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
                        marker: [51.505, -0.09]
                  };
            }
      };
</script>

<style>
      .l-map {
            height: 100%;
            width: 100%;
      }
</style>