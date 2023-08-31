<template>
  <DefaultLayout>
    <template #left>
      <MetaInformation></MetaInformation>
      <LeafletMap :mapDetails="mapPropDetails" @mapIsVisible="mapIsVisible"></LeafletMap>
    </template>
    <div>
      <row>
        <LeafletMap v-if="visible" :mapDetails="mapPropDetails" class="z-50"></LeafletMap>
        <CV @mapDetails="mapDetails" :class="visible ? 'pt-12' : 'pt-0'"></CV>
      </row>
    </div>

    <!-- <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav> -->

    <!-- <RouterView /> -->
    <template #right>
      <TechnicalToolboxVue></TechnicalToolboxVue>
    </template>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import MetaInformation from '@/components/MetaInformation.vue'
import LeafletMap from '@/components/LeafletMap.vue'
import CV from './components/CV.vue'
import { type MapDetails } from '@/interface/timeline'
import { ref } from 'vue'
import TechnicalToolboxVue from './components/TechnicalToolbox.vue'

//import { RouterLink, RouterView } from 'vue-router'

const visible = ref(false)

const mapIsVisible = (value: boolean) => {
  if (!value) {
    visible.value = true
  } else {
    visible.value = false
  }
}

const mapPropDetails = ref()

const mapDetails = (value: MapDetails) => {
  mapPropDetails.value = value
}
</script>
<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
