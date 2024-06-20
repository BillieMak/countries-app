import { reactive } from 'vue'

import { useQuery } from '@vue/apollo-composable'
import { GET_COUNTRIES } from '@/api/queries'
import type { Country } from '@/interfaces/country.interface'

interface Response {
  countries: Country[]
}

const useCountry = () => {
  const state = reactive({
    isCardActive: false,
    countryOfCard: null as Country | null
  })

  const { result } = useQuery<Response>(GET_COUNTRIES)

  const handleActive = () => {
    state.countryOfCard = null
  }

  const toggleActive = (country: Country) => {
    if (state.countryOfCard && state.countryOfCard.name === country.name) {
      state.countryOfCard = null
    } else {
      state.countryOfCard = country
    }
  }

  return {
    result,
    state,
    toggleActive,
    handleActive
  }
}

export default useCountry
