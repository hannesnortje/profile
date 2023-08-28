<template>
  <div class="pl-40 pr-40 pt-10">
    <div class="pb-10" v-for="(item, index) in cv" :key="index">
      <div class="bg-white shadow-lg rounded-lg p-6 w-auto">
        <h2 class="text-xl font-semibold mb-2">{{ item.heading }}</h2>
        <p class="text-gray-600 mb-4">{{ item.description }}</p>
        <div class="flex justify-between text-gray-500">
          <p>
            Start: <span class="font-semibold">{{ item.startYear }}</span>
          </p>
          <p>
            End: <span class="font-semibold">{{ item.endYear }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { timeline } from '@/settings/CV'
import { onMounted, ref } from 'vue'

const cv = ref()

onMounted(() => {
  cv.value = timeline
})
</script>

<style scoped></style>
