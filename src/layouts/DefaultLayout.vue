<template>
  <div class="flex flex-wrap border border-black p-2">
    <div class="w-full sm:w-1/4 order-1 sm:order-1 bg-gray-200 top-0 border border-black">
      <slot name="left"></slot>
    </div>
    <div class="w-full sm:w-[30%] order-3 sm:order-2 bg-gray-300 border border-black z-10">
      <slot></slot>
    </div>
    <div class="w-full sm:w-[45%] order-2 sm:order-3 bg-gray-200 top-0 border border-black">
      <slot name="right"></slot>
    </div>
  </div>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template>

<script setup lang="ts"></script>
