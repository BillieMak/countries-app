<template>
  <div class="flex items-center bg-white rounded-full shadow-xl p-2 relative">
    <input
      type="text"
      placeholder="Escribe el país que deseas ver"
      class="flex-grow p-2 rounded-lg-full focus:outline-none"
      v-model="inputName"
      @input="onSeachInput"
      @click="toggleFilers"
    />
    <button
      @click="onSearch"
      class="flex items-center justify-center bg-blue-500 hover:bg-blue-600 shadow-sm shadow-slate-300 text-white rounded-full px-4 py-2"
    >
      <IconSearch />
      <span class="sm:hidden md:inline-block"> Buscar</span>
    </button>
  </div>
  <FiltersCountry
    :filtersCodeCountry="filtersCodeCountry"
    :show="showFiltersCountry"
    @update:selected="updateCodesFilter"
    @clear-filters="cleanFilters"
  />
</template>

<script setup lang="ts">
import IconSearch from '@/icons/IconSearch.vue'
import FiltersCountry from './FiltersCountry.vue'
import useSearch from '@/composables/useSearch'

const {
  showFiltersCountry,
  updateCodesFilter,
  onSearch,
  toggleFilers,
  onSeachInput,
  inputName,
  cleanFilters,
  filtersCodeCountry
} = useSearch()
</script>
