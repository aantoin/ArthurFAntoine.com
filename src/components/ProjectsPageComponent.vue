<template>
  <PageComponent :isTurned="isTurned">
    <h1 class="text-4xl border-b-slate-600 border-b-4 mb-2">Projects</h1>
    <div v-for="(project, index) in projects" :key="'project-' + index" class="border-b-2">
      <h2 class="text-3xl pb-2">{{ project.name }}</h2>
      <a class="inline-block my-1 mr-1 p-1 border-2 border-slate-600 hover:bg-slate-600 hover:text-white rounded-xl cursor-pointer"
        :href="project.live" target="_blank">Live</a>
      <a class="inline-block my-1 p-1 border-2 border-slate-600 hover:bg-slate-600 hover:text-white rounded-xl cursor-pointer"
        :href="project.source" target="_blank">Source</a>
      <p>{{ project.description }}</p>
    </div>
  </PageComponent>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PageComponent from './PageComponent.vue';

defineProps<{
  isTurned: boolean,
}>()

const projects = ref([
  {
    name: 'ArthurFAntoine.com',
    live: 'https://arthurfantoine.com',
    source: 'https://github.com/aantoin/ArthurFAntoine.com',
    description: 'A portfolio made with TypeScript, Vue JS, and Tailwind CSS.'
  },
  {
    name: 'CrazyBearSports.com',
    live: 'https://crazybearsports.com',
    source: 'https://github.com/aantoin/CrazyBearSports',
    description: 'A sports news/blog site made with Python, Django, Bootstrap, and JQuery'
  },
])
</script>

<style scoped></style>