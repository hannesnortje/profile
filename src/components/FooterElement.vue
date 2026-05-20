<template>
  <div class="flex flex-wrap items-center gap-x-8 gap-y-2">
    <button
      @click="openLink('/impressum')"
      class="font-bold transition-all duration-300 hover:scale-125"
    >
      Impressum
    </button>
    <button
      @click="openLink('/datenschutz')"
      class="font-bold transition-all duration-300 hover:scale-125"
    >
      Datenschutz
    </button>
    <span>
      &copy; {{ new Date().getFullYear() }} Hannes Nortjé - Profile. All rights reserved.
    </span>
  </div>
</template>

<script setup lang="ts">
const openLink = (path: string) => {
  window.open(path, '_blank');
};
</script>

<style scoped></style>
