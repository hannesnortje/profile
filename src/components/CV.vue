<template>
  <div class="pt-3 pr-3 pl-3">
    <div class="flex justify-end pt-2">
      <button
        @click="reverseCV"
        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Reverse
      </button>
    </div>
    <div class="pb-3" v-for="(item, index) in cv" :key="index">
      <div
        @mouseover="$emit('mapDetails', item.mapDetails)"
        class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div id="defaultTabContent">
          <div
            class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
            id="about"
            role="tabpanel"
            aria-labelledby="about-tab"
          >
            <h3 class="mb-3 text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {{ years(index) }}
            </h3>
            <h2 class="mb-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ item.heading }}
            </h2>
            <p class="mb-3 text-gray-500 dark:text-gray-400">
              {{ item.description }}
            </p>
            <a
              class="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
              @click="learnMore(index)"
            >
              Learn more
              <svg
                class="w-2.5 h-2.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </div>
          <div
            class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
            ref="event"
            role="tabpanel"
            aria-labelledby="services-tab"
          >
            <h2 class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              A Few Key Elaborations
            </h2>
            <!-- List -->
            <ul
              v-for="(value, index) in item.elaboration"
              :key="index"
              role="list"
              class="space-y-4 text-gray-500 dark:text-gray-400"
            >
              <li class="flex space-x-2 items-center">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                  />
                </svg>
                <span class="leading-tight">{{ value }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        v-if="index < cv.length - 1"
        class="flex place-content-center pt-3"
        @mouseenter="spin(index)"
      >
        <svg
          ref="spinEvent"
          height="30px"
          width="35px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xml:space="preserve"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              style="fill: #878787"
              d="M292.236,141.038l-62.627-62.627c-5.72-5.72-13.509-8.882-21.597-8.768l-0.095,0.001 c-16.38,0.23-29.535,13.578-29.527,29.961l0.018,35.169c-33.319,7.942-63.894,24.938-88.725,49.771 c-35.404,35.403-54.901,82.475-54.901,132.543s19.497,97.139,54.901,132.542c27.003,27.003,60.793,44.753,97.524,51.655 c18.187,3.418,35.018-10.495,35.018-29.002l0,0c0-14.137-10.016-26.344-23.907-28.969c-59.448-11.235-104.55-63.563-104.55-126.228 c0-55.462,35.336-102.814,84.673-120.757l0.014,27.913c0.008,16.397,13.202,29.738,29.597,29.93l0,0 c8.064,0.095,15.824-3.067,21.526-8.769l62.656-62.657C303.753,171.229,303.753,152.555,292.236,141.038z"
            ></path>
            <g>
              <path
                style="fill: #fcfcfc"
                d="M192.72,512c-2.458,0-4.932-0.227-7.397-0.69c-38.979-7.326-74.545-26.16-102.852-54.467 c-37.331-37.332-57.888-86.964-57.888-139.754c0-52.793,20.559-102.425,57.888-139.755c23.989-23.988,53.492-41.32,85.734-50.438 l-0.014-27.285c-0.012-21.839,17.745-39.856,39.583-40.163c10.878-0.15,21.427,4.132,29.048,11.754l62.626,62.625l0,0 c15.475,15.476,15.475,40.658,0,56.134l-62.657,62.656c-7.596,7.597-18.126,11.86-28.857,11.755 c-21.866-0.255-39.666-18.254-39.677-40.123l-0.006-12.352c-38.976,20.075-64.282,60.671-64.282,105.193 c0,56.795,40.477,105.666,96.245,116.205c18.666,3.528,32.213,19.926,32.213,38.991c0,11.85-5.23,22.985-14.35,30.551 C210.865,508.815,201.912,512,192.72,512z M208.427,79.839c-0.091,0-0.181,0.001-0.271,0.002 c-10.837,0.153-19.571,9.015-19.565,19.757l0.018,35.17c0.002,4.723-3.239,8.831-7.834,9.926 c-31.624,7.538-60.629,23.811-83.879,47.062c-33.477,33.477-51.914,77.988-51.914,125.331s18.436,91.853,51.914,125.33 c25.39,25.391,57.271,42.28,92.196,48.845c5.694,1.075,11.509-0.435,15.96-4.128c4.434-3.677,6.975-9.091,6.975-14.851 c0-9.27-6.562-17.239-15.602-18.947c-65.393-12.357-112.856-69.659-112.856-136.249c0-58.083,36.726-110.465,91.386-130.342 c3.127-1.138,6.61-0.677,9.335,1.229c2.724,1.907,4.348,5.024,4.35,8.351l0.015,27.913c0.005,10.757,8.761,19.611,19.517,19.737 c5.273,0.091,10.458-2.045,14.195-5.783l62.655-62.656c7.522-7.522,7.522-19.763,0-27.285l-62.626-62.626 C218.712,81.938,213.633,79.839,208.427,79.839z"
              ></path>
              <path
                style="fill: #fcfcfc"
                d="M229.481,218.262c-2.61,0-5.221-0.996-7.212-2.987c-3.983-3.983-3.983-10.441,0-14.425l1.417-1.417 c3.983-3.982,10.441-3.982,14.425,0c3.983,3.983,3.983,10.441,0,14.425l-1.417,1.417 C234.702,217.267,232.091,218.262,229.481,218.262z"
              ></path>
              <path
                style="fill: #fcfcfc"
                d="M250.8,197.001c-2.61,0-5.221-0.996-7.212-2.987c-3.983-3.983-3.983-10.441,0-14.425l23.42-23.42 c3.983-3.982,10.441-3.982,14.425,0c3.983,3.983,3.983,10.441,0,14.425l-23.42,23.42C256.021,196.004,253.41,197.001,250.8,197.001 z"
              ></path>
            </g>
            <path
              style="fill: #878787"
              d="M477.218,194.913c0-50.068-19.497-97.139-54.901-132.542c-27.003-27.003-60.793-44.753-97.524-51.656 c-18.187-3.418-35.018,10.495-35.018,29.002l0,0c0,14.137,10.016,26.344,23.907,28.969c59.448,11.235,104.55,63.563,104.55,126.227 c0,55.462-35.336,102.814-84.673,120.757l-0.014-27.913c-0.008-16.397-13.202-29.738-29.597-29.93 c-8.064-0.095-15.824,3.067-21.527,8.769l-62.656,62.656c-11.518,11.518-11.518,30.192,0,41.709l62.627,62.627 c5.72,5.72,13.509,8.882,21.597,8.768l0.095-0.001c16.38-0.231,29.535-13.578,29.527-29.961l-0.018-35.169 c33.319-7.942,63.894-24.938,88.725-49.771C457.72,292.054,477.218,244.982,477.218,194.913z"
            ></path>
            <path
              style="fill: #fcfcfc"
              d="M303.547,452.56c-10.552,0-20.875-4.267-28.367-11.758l-62.627-62.627 c-15.475-15.476-15.475-40.658,0-56.134l62.656-62.656c7.596-7.597,18.11-11.92,28.858-11.755 c21.865,0.255,39.665,18.254,39.677,40.122l0.006,12.353c38.976-20.075,64.282-60.67,64.282-105.192 c0-56.796-40.477-105.667-96.245-116.206c-18.666-3.528-32.213-19.926-32.213-38.991c0-11.85,5.23-22.985,14.35-30.551 c9.137-7.58,21.074-10.671,32.751-8.475c38.979,7.325,74.544,26.159,102.852,54.467c37.33,37.33,57.888,86.961,57.888,139.754 s-20.559,102.426-57.888,139.754c-23.987,23.988-53.49,41.319-85.733,50.438l0.014,27.285c0.011,21.84-17.746,39.857-39.583,40.164 c-0.012,0-0.118,0.001-0.131,0.001C303.913,452.559,303.729,452.56,303.547,452.56z M303.601,268.025 c-5.206,0-10.285,2.101-13.969,5.784l-62.655,62.656c-7.522,7.522-7.522,19.763,0,27.285l62.627,62.627 c3.748,3.748,8.913,5.837,14.242,5.782c0.011,0,0.118-0.001,0.13-0.001c10.706-0.15,19.441-9.014,19.435-19.757l-0.018-35.169 c-0.002-4.723,3.239-8.831,7.834-9.926c31.625-7.538,60.629-23.812,83.878-47.062c33.477-33.475,51.914-77.986,51.914-125.33 s-18.436-91.855-51.914-125.33c-25.391-25.392-57.271-42.281-92.196-48.845c-5.693-1.071-11.509,0.433-15.96,4.127 c-4.433,3.677-6.975,9.091-6.975,14.851c0,9.27,6.562,17.239,15.602,18.947c65.393,12.357,112.856,69.659,112.856,136.25 c0,58.082-36.726,110.464-91.386,130.341c-3.127,1.138-6.61,0.677-9.335-1.229c-2.724-1.907-4.349-5.024-4.35-8.351l-0.014-27.913 c-0.006-10.757-8.761-19.611-19.517-19.737C303.753,268.025,303.676,268.025,303.601,268.025z"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { timeline } from '@/settings/CV'
import { onMounted, ref, type Ref } from 'vue'

const cv = ref()

onMounted(() => {
  cv.value = timeline
})

const reverseCV = () => {
  cv.value.reverse()
}

const years = (index: number) => {
  if (cv.value[index].startYear && cv.value[index].endYear) {
    return `${cv.value[index].startYear} - ${cv.value[index].endYear}`
  } else if (cv.value[index].startYear) {
    return `${cv.value[index].startYear}`
  } else if (cv.value[index].endYear) {
    return `${cv.value[index].endYear}`
  }
}

const event: Ref<HTMLElement[]> = ref([])

const learnMore = (index: number) => {
  event.value[index].classList.toggle('hidden')
}
const spinEvent = ref()

const spin = (index: number) => {
  spinEvent.value[index].classList.add('spin-animation')
}
</script>

<style scoped>
.spin-animation {
  animation-name: spin;
  animation-duration: 1500ms;
  animation-iteration-count: 1;
  animation-timing-function: linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
