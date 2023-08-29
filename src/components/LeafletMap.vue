<template>
  <div ref="map" class="flex place-content-center p-10">
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
  <MapOverlay
    v-if="isOverlay"
    :x="elementPositionX"
    :y="elementPositionY"
    :width="elementWidth.toString()"
    :height="elementHeight.toString()"
  ></MapOverlay>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'
import { useMouseInElement } from '@vueuse/core'
import MapOverlay from './MapOverlay.vue'

// const x = ref()
// const y = ref()

// const getMouseCoordinates = (event: any) => {
//   x.value = event.clientX
//   y.value = event.clientY
// }

//const { x, y } = useMouse()

const zoom = ref(4)

const map = ref(null)

const isOverlay = ref(false)

const { elementPositionX, elementPositionY, elementHeight, elementWidth, isOutside } =
  useMouseInElement(map)

watch(isOutside, () => {
  isOutside.value ? (isOverlay.value = false) : (isOverlay.value = true)
})

/*const elementSize: number[][] = []

watch(
  [x, y, elementPositionX, elementPositionY, elementHeight, elementWidth],
  (
    [xNew, yNew, positionXNew, positionYNew, elementHeightNew, elementWidthNew],
    [xPrev, yPrev, positionXPrev, positionYPrev, elementHeightPrev, elementWidthPrev]
  ) => {
    if (
      (elementSize.length === 0 && elementPositionX.value > 0) ||
      positionXNew !== positionXPrev ||
      positionYNew !== positionYPrev ||
      elementHeightNew !== elementHeightPrev ||
      elementWidthNew !== elementWidthPrev
    ) {
      if (elementSize.length !== 0) elementSize.splice(0)
      elementSize.push([positionXNew, positionYNew])
      elementSize.push([positionXNew + elementWidthNew, positionYNew + elementHeightNew])
    }
    if (
      xNew >= elementSize[0][0] &&
      xNew <= elementSize[1][0] &&
      yNew >= elementSize[0][1] &&
      yNew <= elementSize[1][1]
    ) {
      isOverlay.value = true
    }

    if (
      xNew < elementSize[0][0] ||
      xNew > elementSize[1][0] ||
      yNew < elementSize[0][1] ||
      yNew > elementSize[1][1]
    ) {
      isOverlay.value = false
    }

    console.log(isOutside.value)
    //   xNew,
    //   yNew,
    //   elementSize[0][0],
    //   elementSize[1][0],
    //   elementSize[0][1],
    //   elementSize[1][1],
    //   isOverlay.value
    // )
  }
)*/
</script>
