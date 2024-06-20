import {
  GET_COUNTRIES_BY_NAME_AND_COUNTRY,
  GET_COUNTRIES_BY_NAME,
  GET_BY_CONTINENTS
} from '@/api/queries'
import { flattArrContinents } from '@/helpers/country.helper'
import type { Country } from '@/interfaces/country.interface'
import { useCountryStore } from '@/stores/country'
import { useLazyQuery } from '@vue/apollo-composable'
import { ref } from 'vue'

const useSearch = () => {
  interface Response {
    countries: Country[]
  }

  const inputName = ref('')

  const showFiltersCountry = ref(false)

  const countryStore = useCountryStore()

  const filtersCodeCountry = ref<string[]>([])

  const updateCodesFilter = (data: any) => {
    filtersCodeCountry.value = data
  }

  const { result: resultByCodeAndName, load: loadByCodeAndName } = useLazyQuery<Response>(
    GET_COUNTRIES_BY_NAME_AND_COUNTRY,
    () => ({
      searhTerm: `.*${inputName.value}.*`,
      contientCodes: filtersCodeCountry.value
    })
  )

  const { result: resultByName, load: loadByName } = useLazyQuery<Response>(
    GET_COUNTRIES_BY_NAME,
    () => ({
      searhTerm: `.*${inputName.value}.*`
    })
  )

  const { result: resultByContinents, load: loadByContinents } = useLazyQuery(
    GET_BY_CONTINENTS,
    () => ({
      contientCodes: filtersCodeCountry.value
    })
  )

  const toggleFilers = () => {
    showFiltersCountry.value = !showFiltersCountry.value
  }

  const onSeachInput = async () => {
    if (inputName.value === '') {
      return countryStore.clearCountries()
    }
    showFiltersCountry.value = false

    if (filtersCodeCountry.value?.length === 0) {
      await loadByName()

      countryStore.setFiltereds(resultByName.value?.countries || [])
      return
    }

    setTimeout(async () => {
      await loadByCodeAndName()
      countryStore.setFiltereds(resultByCodeAndName.value?.countries || [])
    }, 500)
  }

  const cleanFilters = () => {
    filtersCodeCountry.value = []
    // showFiltersCountry.value = false
  }

  const onSearch = async () => {
    await loadByContinents()
    countryStore.setFiltereds(flattArrContinents(resultByContinents.value?.continents))

    toggleFilers()
  }

  return {
    showFiltersCountry,
    updateCodesFilter,
    onSearch,
    toggleFilers,
    onSeachInput,
    cleanFilters,
    inputName,
    filtersCodeCountry
  }
}
export default useSearch
