<template>
  <div class="sm:px-10 px-24">
    <SearchComponent />
  </div>
  <div class="flex flex-wrap gap-10 justify-center sm:px-10 px-24 mt-20">
    <template v-if="countryStore.countriesFiltered.length == 0">
      <CardItem
        v-for="country in result?.countries"
        :key="country.name"
        :country="country"
        :isActive="state.countryOfCard === country"
        @onactive="toggleActive"
      />
    </template>
    <template v-else>
      <CardItem
        v-for="country in countryStore.countriesFiltered"
        :key="country.name"
        :country="country"
        :isActive="state.countryOfCard === country"
        @onactive="toggleActive"
      />
    </template>
  </div>
  <FloatInfo
    v-if="state.countryOfCard"
    :isActive="!state.countryOfCard"
    :country="state.countryOfCard"
    @update:isactive="handleActive"
  />
</template>
<script lang="ts" setup>
import SearchComponent from '@/components/SearchComponent.vue'
import CardItem from '@/components/CardItem.vue'
import FloatInfo from '@/components/FloatInfo.vue'

import { useCountryStore } from '../stores/country'
import useCountry from '@/composables/useCountry'

const countryStore = useCountryStore()

const { handleActive, toggleActive, state, result } = useCountry()
</script>
