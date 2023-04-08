<template>
  <div class="w-full h-full p-[5%]">
    <div class="w-full h-full bg-paper overflow-hidden p-2 whitespace-normal" :style="{
      'backface-visibility': 'hidden', 'transform-style': 'preserve-3d', 'opacity': Number(!isTurned),
      'transition': isTurned ? 'opacity 600ms cubic-bezier(1.000, 0.000, 1.000, 0.000)' : 'opacity 600ms cubic-bezier(0.000, 1.000, 0.000, 1.000)'
    }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  isTurned: boolean,
}>()
</script>

<style scoped></style>