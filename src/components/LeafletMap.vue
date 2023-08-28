<template>
  <div ref="map" class="flex place-content-center h-screen">
    <l-map
      v-model:zoom="zoom"
      :center="[-25.73689712936625, 28.30159599695999]"
      :use-global-leaflet="false"
      style="height: 350px; width: 3500px"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
    </l-map>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'

const zoom = ref(4)
</script>

<style></style>
