<template>
  <div
    class="absolute w-full h-full rounded-r-lg overflow-visible whitespace-nowrap transition-[transform background-color] duration-[1s] origin-left ease-in"
    :class="(isTurned ? 'bg-manila-shaded' : 'bg-manila')"
    :style="{ 'transform': (isTurned ? 'rotateY(-180deg)' : ''), 'z-index': 10 - index * (Number(isTurned) * -2 + 1), 'transform-style': 'preserve-3d' }">
    <div class="inline-block w-full h-full">
      <slot :isTurned="isTurned"></slot>
    </div>
    <div class="inline-block absolute bg-manila left-full origin-bottom-left rounded-t-lg px-4 cursor-pointer"
      :style="{ 'transform': tabTransform, 'width': tabSize + 'px' }" @click="$emit('selectTab')">{{ tab.title
      }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
const tabSize = ref(100);
const tabOffset = ref(0);

const props = defineProps<{
  tab: any,
  totalTabs: number,
  index: number,
  currentTab: number,
}>()
defineEmits(['selectTab',])

const isTurned = computed(() => {
  return props.index < props.currentTab;
});

const tabTransform = computed(() => {
  var t = 'translate(-1px, ' + (tabSize.value * props.tab.tabIndex + tabOffset.value) + 'px) rotate(90deg)'
  return t;
})
</script>

<style scoped></style>