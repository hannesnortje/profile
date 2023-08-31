<template>
  <div class="z-50 fixed inset-0 flex items-center justify-center">
    <div :style="overlayStyle"></div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const props = defineProps({
  x: {
    type: Number,
    default: 0
  },
  y: {
    type: Number,
    default: 0
  },
  width: {
    type: String,
    default: '300px'
  },
  height: {
    type: String,
    default: '200px'
  }
})

const overlayStyle = reactive({
  width: props.width,
  height: props.height,
  left: `${props.x}px`,
  top: `${props.y}px`
})
</script>

<style scoped>
/* Add any additional styling you need here */
</style>
