<template>
  <div class="flex h-screen transition-all">
    <SidebarComponent />

    <div class="flex-1 p-4 md:p-3 bg-cyan-50 max-h-min overflow-auto">
      <RouterView />
    </div>
  </div>
</template>
<script lang="ts" setup>
import SidebarComponent from '@/components/SidebarComponent.vue'

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
    alert('scroll')
  }
})
</script>
