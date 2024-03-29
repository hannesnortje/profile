<template>
  <div ref="map" class="flex place-content-center p-10 sticky top-0">
    <l-map
      v-model:zoom="zoom"
      :center="props.mapDetails.marker"
      :use-global-leaflet="false"
      style="height: 350px; width: 3500px"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker v-if="props.mapDetails.marker" :lat-lng="props.mapDetails.marker"
        ><l-tooltip
          setTooltipContent="props.mapDetails.name"
          :options="{ permanent: true, direction: 'top' }"
          >{{ props.mapDetails.name }}</l-tooltip
        ></l-marker
      >
      <l-rectangle v-if="props.mapDetails.rectangle" :bounds="props.mapDetails.rectangle"
        ><l-tooltip
          setTooltipContent="props.mapDetails.name"
          :options="{ permanent: true, direction: 'center' }"
          >{{ props.mapDetails.name }}</l-tooltip
        ></l-rectangle
      >
    </l-map>
  </div>
  <MapOverlay
    v-if="isOverlay"
    :x="elementPositionX"
    :y="elementPositionY"
    :width="elementWidth.toString()"
    :height="elementHeight.toString()"
  ></MapOverlay>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker, LTooltip, LRectangle } from '@vue-leaflet/vue-leaflet';
import { useMouseInElement } from '@vueuse/core';
import MapOverlay from './MapOverlay.vue';
import { useElementVisibility } from '@vueuse/core';

const props = defineProps({
  mapDetails: {
    type: Object,
    default() {
      return { marker: [51.619806886449815, 8.895870756553801], name: 'Home Office' };
    }
  }
});

watch(
  () => props.mapDetails,
  (mapDetailsNew) => {
    if (mapDetailsNew.rectangle && mapDetailsNew.rectangle.length > 0) {
      zoom.value = 3;
    } else if (mapDetailsNew.marker && mapDetailsNew.marker.length > 0) {
      zoom.value = 4;
    }
  }
);

const zoom = ref(4);

const map = ref(null);

const mapIsVisible = useElementVisibility(map);

const emit = defineEmits(['mapIsVisible']);

watch(mapIsVisible, () => {
  emit('mapIsVisible', mapIsVisible.value);
});

const isOverlay = ref(false);

const { elementPositionX, elementPositionY, elementHeight, elementWidth, isOutside } =
  useMouseInElement(map);

watch(isOutside, () => {
  isOutside.value ? (isOverlay.value = false) : (isOverlay.value = true);
});
</script>
