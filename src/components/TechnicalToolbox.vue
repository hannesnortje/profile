<template>
  <div class="p-3 sticky top-0">
    <div class="bg-white border-4 border-blue-600 shadow-lg rounded-lg p-6">
      <h2 class="text-3xl font-semibold mb-4">Technical Skills</h2>
      <ul class="list-disc pl-6">
        <li class="mb-2 text-2xl" v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toolbox } from '@/settings/toolbox'
import { onMounted, ref } from 'vue'

const skills = ref()

onMounted(() => {
  skills.value = toolbox
})
</script>

<style scoped></style>
