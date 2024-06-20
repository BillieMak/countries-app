<template>
  <div
    v-if="show"
    class="shadow-lg sm:w-10/12 md:w-6/12 lg:w-4/12 absolute shadow-slate-300 mt-6 bg-white rounded-2xl"
  >
    <div>
      <p class="flex justify-between py-2 px-4 text-lg font-semibold text-slate-400">
        Filtrar Por Contienentes
        <span
          class="text-dodger-blue-600 cursor-pointer select-none"
          @click.self="$emit('clearFilters')"
          >Limpiar</span
        >
      </p>
    </div>

    <div class="flex flex-wrap gap-3 p-4 cursor-pointer">
      <div v-for="continent in imgs" :key="continent.name" clas>
        <img
          :class="[
            'object-cover w-28',
            {
              selected: isSelected(continent.code)
            }
          ]"
          :src="continent.src"
          :alt="continent.code"
          @click="selectCountry(continent.code)"
        />
        <h4 class="text-center w-full">{{ continent.name }}</h4>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref, watch } from 'vue'

import europaImg from '../assets/continents/europa.png'
import americaImg from '../assets/continents/america.png'
import asiaImg from '../assets/continents/asia.png'
import oceaniaImg from '../assets/continents/oceania.png'
import africaImg from '../assets/continents/africa.png'

interface Props {
  show?: boolean
  filtersCodeCountry: string[]
}

const props = defineProps<Props>()

const emit = defineEmits(['update:selected', 'clearFilters'])

const countriesSelected = ref<string[]>([])

const imgs = ref([
  {
    code: 'EU',
    name: 'Europa',
    src: europaImg
  },
  {
    code: 'SA',
    name: 'America',
    src: americaImg
  },
  {
    code: 'AS',
    name: 'Asia',
    src: asiaImg
  },
  {
    code: 'OC',
    name: 'Oceania',
    src: oceaniaImg
  },
  {
    code: 'AF',
    name: 'Africa',
    src: africaImg
  }
])
const selectCountry = (name: string) => {
  const index = countriesSelected.value.indexOf(name)
  if (index === -1) {
    countriesSelected.value.push(name)
    emit('update:selected', countriesSelected.value)
    return
  }

  countriesSelected.value.splice(index, 1)
  emit('update:selected', countriesSelected.value)
}
const isSelected = computed(() => (code: string) => {
  return props.filtersCodeCountry.includes(code)
})

watch(
  () => props.filtersCodeCountry,
  (newValue) => {
    if (newValue.length === 0) {
      countriesSelected.value = []
    }
  },
  {
    deep: true
  }
)
</script>
<style scoped>
.selected {
  filter: drop-shadow(0 0 10px rgb(2, 27, 165));
}
</style>
