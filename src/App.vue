<template>
  <DefaultLayout>
    <template #left>
      <MetaInformation></MetaInformation>
      <LeafletMap :mapDetails="mapPropDetails"></LeafletMap>
    </template>

    <CV @mapDetails="mapDetails"></CV>

    <!-- <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav> -->

    <!-- <RouterView /> -->
    <template #right>
      <div>test right</div>
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

//import { RouterLink, RouterView } from 'vue-router'

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
