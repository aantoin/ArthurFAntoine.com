<script setup lang="ts">
import { RouterView } from 'vue-router'
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
}
else {
  document.documentElement.classList.remove('dark')
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  if (event.matches) {
    document.documentElement.classList.add('dark');
  }
  else {
    document.documentElement.classList.remove('dark')
  }
});
</script>

<template>
  <RouterView class="text-text" />
</template>

<style scoped></style>
