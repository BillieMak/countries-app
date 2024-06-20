<template>
  <div class="absolute right-0 bottom-0 shadow-lg shadow-slate-400 bg-white h-auto w-80 px-8 py-10">
    <div class="header rounded-md overflow-hidden">
      <img :src="img || loadingImage" alt="template" />
    </div>
    <div class="body">
      <h2 class="flex justify-start items-center gap-3 px-4 py-2 select-none">
        <b class="text-4xl">{{ country?.emoji }}</b>
        <div>
          <h2 class="text-lg font-bold">
            {{ country?.name }}
          </h2>
          <p class="text-md font-semibold text-gray-600">
            {{ country?.continent.name }}
          </p>
        </div>
      </h2>
      <h2 class="text-dodger-blue-700 font-semibold">
        Capital : <span class="text-zinc-700">{{ country?.capital }}</span>
      </h2>
      <h2 class="text-dodger-blue-700 font-semibold">
        Language : <span class="text-zinc-700">{{ country?.capital }}</span>
      </h2>
      <h2 class="text-dodger-blue-700 font-semibold">
        Currencies :
        <span class="ml-2 text-zinc-700" v-for="currcy in country?.currencies" :key="currcy">
          {{ currcy }}</span
        >
      </h2>
      <h2 class="text-dodger-blue-700 font-semibold">
        Capital: <span class="text-zinc-700">{{ country?.capital }}</span>
      </h2>
      <h2 class="text-dodger-blue-700 font-semibold">Region</h2>
      <div class="max-h-32 overflow-auto p-2 mt-2">
        <span class="text-zinc-700 mb-3" v-for="state in country?.states" :key="state.name">{{
          state.name
        }}</span>
      </div>
    </div>

    <button class="absolute top-2 right-2" @click="$emit('update:isactive', false)">
      <CloseIcon />
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { Country } from '../interfaces/country.interface'

import CloseIcon from '@/icons/CloseIcon.vue'
import useImage from '@/composables/useImage'
import loadingImage from '../assets/loading.gif'
import { watch } from 'vue'

interface Props {
  country?: Country
  isActive: boolean
}
const props = defineProps<Props>()

defineEmits(['update:isactive'])

const { img, loadImage } = useImage(props.country?.name || '')

watch(
  () => props.country,
  () => {
    loadImage(props.country?.name || '')
  },
  {
    deep: true
  }
)
</script>
