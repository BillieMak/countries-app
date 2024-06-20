import type { Country } from '@/interfaces/country.interface'

interface Continent {
  countries: Country[]
}

export const flattArrContinents = (continents: Continent[]) => {
  return continents.reduce((acc: Country[], continent) => {
    return acc.concat(continent.countries)
  }, [])
}
