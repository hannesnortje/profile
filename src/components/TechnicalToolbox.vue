<template>
  <div class="p-3">
    <div class="bg-white border-4 border-blue-600 shadow-lg rounded-lg p-6">
      <h2 class="text-2xl font-semibold mb-4">Technical Skills</h2>
      <ul class="list-disc pl-6">
        <li class="mb-2" v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = [
  'JavaScript (ES6+)',
  'Vue.js',
  'React',
  'Node.js',
  'HTML5',
  'CSS3',
  'SASS/SCSS',
  'Git',
  'RESTful APIs',
  'Responsive Web Design',
  'Webpack',
  'SQL',
  'MongoDB'
]
</script>

<style scoped>
/* You can add custom styling here if needed */
</style>
