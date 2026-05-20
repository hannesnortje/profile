<template>
  <div class="p-3 sticky top-0">
    <div class="bg-white border-4 border-blue-600 shadow-lg rounded-lg p-6 space-y-6">
      <header>
        <h2 class="text-2xl font-bold text-blue-700 leading-snug">
          AI Specialist &amp; Agentic Coder · Data Scientist
        </h2>
        <p class="text-xs font-bold uppercase tracking-wider text-gray-500 mt-3">
          Technical Skills
        </p>
      </header>
      <div v-for="(items, category) in toolbox" :key="category">
        <h3 class="text-sm font-bold uppercase tracking-wider text-blue-700 mb-2">
          {{ categoryLabels[category] }}
        </h3>
        <ul class="list-disc pl-6">
          <li class="mb-1 text-xl" v-for="skill in items" :key="skill">{{ skill }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toolbox } from '@/settings/toolbox'

const categoryLabels: Record<keyof typeof toolbox, string> = {
  agenticCoding: 'Agentic Coding',
  dataScience: 'Data Science',
  languages: 'Languages',
  frameworks: 'Frameworks',
  others: 'Others'
}
</script>

<style scoped></style>
