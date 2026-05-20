<template>
  <div class="pt-10">
    <header class="text-center">
      <div class="text-2xl font-bold">Profile of</div>
      <div class="text-2xl">{{ metaInformation.profile_of }}</div>
      <div class="text-base italic text-gray-600 mt-2">{{ metaInformation.title }}</div>
    </header>

    <div class="flex place-content-center pt-10">
      <img class="object-cover w-32" :src="metaInformation.picture" />
    </div>

    <!-- address -->

    <div class="mt-10 ml-20 flex">
      <img class="object-cover h-8" src="/icons/location-dot-solid.svg" />
      <address class="ml-10" v-html="addressFormatting(metaInformation.address)"></address>
    </div>

    <!-- email -->

    <div class="mt-5 ml-20 flex">
      <img class="object-cover h-8" src="/icons/envelope-regular.svg" />
      <a
        class="ml-8 underline text-blue-600 visited:text-purple-600"
        href="mailto:hannes.nortje@gmail.com"
        >{{ metaInformation.email }}</a
      >
    </div>

    <!-- telephone -->

    <div class="mt-5 ml-20 flex">
      <img class="object-cover h-8" src="/icons/phone-solid.svg" />
      <a class="ml-8">{{ metaInformation.telephone }}</a>
    </div>

    <!-- languages -->

    <div class="mt-5 ml-20 flex">
      <div class="h-8 w-8 flex items-center justify-center text-2xl leading-none">🌐</div>
      <ul class="ml-8">
        <li v-for="lang in metaInformation.languages" :key="lang">{{ lang }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { metaInformation } from '@/settings/metaInformation'

const addressFormatting = (value: string) => {
  return value.replace(/,/g, '<br>')
}
</script>

<style scoped></style>
