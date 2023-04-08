<template>
  <div class="block w-4/5 h-4/5 aspect-[3/4] absolute right-[10%] top-[10%] origin-center animate-folder-toss"
    :class="animation"
    :style="{ 'perspective': '1500px', 'perspective-origin': 'left', 'max-width': maxWidth + 'px', 'right': rightPad }">
    <FolderTabMobileMenu :tabs="tabs" @selectTab="(index) => selectTab(index)" />
    <FolderTabComponent v-for="(tab, index) in tabs" :key="'tab-' + index" :tab="tab" :totalTabs="tabs.length"
      :index="index" :currentTab="currentTab" @selectTab="selectTab(tab.tabIndex)">
      <template v-slot="slotProps">
        <component v-bind:is="tab.component" :isTurned="slotProps.isTurned" />
      </template>
    </FolderTabComponent>/>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, shallowRef } from 'vue';
import FolderTabComponent from '../components/FolderTabComponent.vue'
import FolderTabMobileMenu from './FolderTabMobileMenu.vue';
import ProfilePageComponent from './ProfilePageComponent.vue';
import CoverPageComponent from './CoverPageComponent.vue'
import ExperiencePageComponent from './ExperiencePageComponent.vue'
import ProjectsPageComponent from './ProjectsPageComponent.vue'
import ContactPageComponent from './ContactPageComponent.vue'
const animation = ref("");
const currentTab = ref(0);
const selectedTab = ref(0);
const tabbingActive = ref(false);
const maxWidth = ref(640);
const windowWidth = ref(window.innerWidth);
const tabNext = () => {
  if (currentTab.value == selectedTab.value) {
    tabbingActive.value = false;
  }
  else {
    currentTab.value = currentTab.value + ((selectedTab.value > currentTab.value) ? 1 : -1);
    setTimeout(() => {
      tabNext();
    }, 200)
  }
}
const selectTab = (index: number) => {
  for (var i = 0; i < tabs.value.length; i++) {
    if (tabs.value[i].tabIndex == index) {
      selectedTab.value = i;
      if (!tabbingActive.value) {
        tabbingActive.value = true;
        tabNext();
      }
      break;
    }
  }

}
onMounted(() => {
  window.onresize = () => {
    windowWidth.value = window.innerWidth;
  }
})
const tabs = ref([
  { title: "", tabIndex: -1, component: shallowRef(CoverPageComponent) },
  { title: "Profile", tabIndex: 0, component: shallowRef(ProfilePageComponent) },
  { title: "Experience", tabIndex: 1, component: shallowRef(ExperiencePageComponent) },
  { title: "Projects", tabIndex: 2, component: shallowRef(ProjectsPageComponent) },
  { title: "Contact", tabIndex: 3, component: shallowRef(ContactPageComponent) },
])
const rightPad = computed(() => {
  return (windowWidth.value > maxWidth.value * 5 / 4) ? ((windowWidth.value - maxWidth.value) / 2) + 'px' : '10%';
})
</script>

<style scoped></style>