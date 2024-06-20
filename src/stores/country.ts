import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { Country } from '@/interfaces/country.interface'

export const useCountryStore = defineStore('country', () => {
  const countriesFiltered = ref<Country[]>([])

  const setFiltereds = (countries: Country[]) => {
    countriesFiltered.value = countries
  }

  const clearCountries = () => {
    countriesFiltered.value = []
  }
  return { countriesFiltered, clearCountries, setFiltereds }
})
