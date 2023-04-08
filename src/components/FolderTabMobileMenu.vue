<template>
  <div class="absolute w-full h-full rounded-r-lg overflow-visible whitespace-nowrap">
    <div class="inline-block w-full h-full"></div>
    <div class="inline-block absolute left-full origin-bottom-left"
      :style="{ 'transform': 'translate(-1px, 0px) rotate(90deg)', }">
      <div v-for="(tab, index) in filteredTabs" :key="'moble-tab-' + index"
        class="inline-block  w-[100px] px-4 bg-manila opacity-10 rounded-t-lg cursor-pointer"
        @click="$emit('selectTab', tab.tabIndex)">{{ tab.title
        }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  tabs: any[],
}>()
const filteredTabs = computed(() => {
  return props.tabs.filter(tab => tab.tabIndex >= 0);
})
</script>

<style scoped></style>