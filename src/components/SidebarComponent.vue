<template>
  <nav
    :class="[
      'bg-zinc-700 shadow-2xl flex flex-col p-4 gap-4 w-60 sm:absolute md:relative sm:h-screen transition-all z-30',
      {
        'sm:-left-full': true,
        'md:left-0': true
      }
    ]"
  >
    <img src="../assets/logo.png" alt="Logo Vue" />
    <div class="flex flex-col gap-1">
      <RouterLink class="link" :to="{ name: 'country' }">Home</RouterLink>
      <RouterLink class="link" :to="{ name: 'view1' }">Vista 1</RouterLink>
      <RouterLink class="link" :to="{ name: 'view2' }">Vista 2</RouterLink>
    </div>
  </nav>
  <button
    class="sm:inline-block md:hidden sm:left-0 md:-left-full absolute top-10 text-white rounded-md p-2 bg-zinc-700 shadow-lg"
    @click="togleSideBar"
  >
    <IconRight />
  </button>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import IconRight from '@/icons/IconRight.vue'

const isActive = ref(true)

const togleSideBar = () => (isActive.value = !isActive.value)
</script>
<style scoped>
.link {
  @apply px-4 py-2 text-white font-bold;
}
.router-link-exact-active {
  @apply bg-white rounded-lg text-zinc-800 px-4 py-2;
}
</style>
