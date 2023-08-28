<template>
  <div class="pt-10">
    <header class="text-center text-2xl">
      <div class="font-bold">Profile of</div>
      <div>{{ metaInformation.profile_of }}</div>
    </header>

    <div class="flex place-content-center pt-10">
      <img class="object-cover h-48 w-96 object-scale-down" :src="metaInformation.picture" />
    </div>

    <!-- address -->

    <div class="mt-10 ml-20 flex">
      <img class="object-cover h-8 object-scale-down" src="/icons/location-dot-solid.svg" />
      <address class="ml-10" v-html="addressFormatting(metaInformation.address)"></address>
    </div>

    <!-- email -->

    <div class="mt-5 ml-20 flex">
      <img class="object-cover h-8 object-scale-down" src="/icons/envelope-regular.svg" />
      <a
        class="ml-8 underline text-blue-600 visited:text-purple-600"
        href="mailto:hannes.nortje@gmail.com"
        >{{ metaInformation.email }}</a
      >
    </div>

    <!-- telephone -->

    <div class="mt-5 ml-20 flex">
      <img class="object-cover h-8 object-scale-down" src="/icons/phone-solid.svg" />
      <a class="ml-8">{{ metaInformation.telephone }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { metaInformation } from '@/settings/metaInformation'

const addressFormatting = (value: any) => {
  return value.replaceAll(/,/g, '<br>')
}
</script>

<style scoped></style>
