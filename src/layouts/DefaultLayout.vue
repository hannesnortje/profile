<template>
  <div class="flex flex-wrap h-screen">
    <div class="w-full sm:w-1/4 bg-gray-200 top-0">
      <slot name="left"></slot>
    </div>
    <div class="w-full sm:w-2/4 bg-gray-300">
      <slot></slot>
    </div>
    <div class="w-full sm:w-1/4 bg-gray-400 top-0">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const stickyLeft = ref(false)
const stickyMiddle = ref(false)
const stickyRight = ref(false)

const handleScroll = () => {
  const middleColumn = document.querySelector('.sticky-middle')
  const leftColumn = document.querySelector('.sticky-left')
  const rightColumn = document.querySelector('.sticky-right')

  if (!middleColumn || !leftColumn || !rightColumn) return

  const middleRect = middleColumn.getBoundingClientRect()
  const leftRect = leftColumn.getBoundingClientRect()
  const rightRect = rightColumn.getBoundingClientRect()

  if (window.innerWidth >= 640) {
    stickyLeft.value = leftRect.top <= 0
    stickyRight.value = rightRect.top <= 0
  } else {
    stickyLeft.value = leftRect.bottom >= window.innerHeight / 8
    stickyMiddle.value = middleRect.top <= window.innerHeight && middleRect.bottom >= 0
    stickyRight.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.sticky {
  position: -webkit-sticky;
  position: sticky;
}

.sticky-left {
  top: 0;
}

.sticky-middle {
  top: 0;
}

.sticky-right {
  top: 0;
}
</style>
