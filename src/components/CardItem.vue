<template>
  <div
    @click="onActiveCard"
    @mouseover="loadImage"
    :class="[
      'card w-80 shadow-slate-300 rounded-3xl overflow-hidden cursor-pointer',
      {
        'text-dodger-blue-700 bg-white': !isActive,
        'text-white bg-dodger-blue-700': isActive
      }
    ]"
  >
    <img
      src="https://i.pinimg.com/originals/28/fe/cf/28fecf360f686fb00e42bc00a50e7292.gif"
      alt="Peru"
    />
    <h2 class="flex justify-start items-center gap-3 px-4 py-2 select-none">
      <b class="text-4xl">{{ country.emoji }}</b>
      <div>
        <h2 class="text-lg font-bold">
          {{ country.name }}
        </h2>
        <p class="text-md font-semibold" :class="isActive ? 'text-white' : 'text-gray-600'">
          {{ country.continent.name }}
        </p>
      </div>
    </h2>
  </div>
</template>
<script lang="ts" setup>
import type { Country } from '@/interfaces/country.interface'

interface Props {
  country: Country
  isActive: boolean
}
const props = defineProps<Props>()

const emit = defineEmits(['onactive'])

const onActiveCard = () => {
  emit('onactive', props.country)
}
const loadImage = () => {}
</script>
<style scoped>
.card {
  box-shadow: 0 0 20px 1px #727272;
}
</style>
