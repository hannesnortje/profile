<template>
  <div class="flex flex-wrap border border-black p-2">
    <div class="w-full sm:w-1/4 bg-gray-200 top-0 border border-black">
      <slot name="left"></slot>
    </div>
    <div class="w-full sm:w-2/4 bg-gray-300 border border-black z-10">
      <slot></slot>
    </div>
    <div class="w-full sm:w-1/4 bg-gray-200 top-0 border border-black">
      <slot name="right"></slot>
    </div>
  </div>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template>

<script setup lang="ts"></script>
