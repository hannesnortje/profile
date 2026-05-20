<template>
  <DefaultLayout>
    <template #left>
      <MetaInformation></MetaInformation>
      <LeafletMap :mapDetails="mapPropDetails" @mapIsVisible="mapIsVisible"></LeafletMap>
    </template>
    <div>
      <div class="flex flex-col space-y-17">
        <LeafletMap v-if="visible" :mapDetails="mapPropDetails" class="z-50"></LeafletMap>
        <CVElements @mapDetails="mapDetails" :class="visible ? 'pt-12' : 'pt-0'"></CVElements>
      </div>
    </div>
    <template #right>
      <TechnicalToolbox></TechnicalToolbox>
    </template>
    <template #footer>
      <div class="flex flex-row justify-center bg-gray-200"><FooterElement></FooterElement></div>
    </template>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import MetaInformation from '@/components/MetaInformation.vue';
import LeafletMap from '@/components/LeafletMap.vue';
import CVElements from '@/components/CVElements.vue';
import type { MapDetails } from '@/interface/timeline';
import { ref } from 'vue';
import TechnicalToolbox from '@/components/TechnicalToolbox.vue';
import FooterElement from '@/components/FooterElement.vue';

const visible = ref(false);

const mapIsVisible = (value: boolean) => {
  visible.value = !value;
};

const mapPropDetails = ref();

const mapDetails = (value: MapDetails) => {
  mapPropDetails.value = value;
};
</script>
