interface Continent {
  name: string
  code: string
}
interface State {
  name: string
}
export interface Country {
  __typename: string
  capital: string
  name: string
  code: string
  emoji: string
  currencies: string[]
  continent: Continent
  states: State[]
  img?: string
}
