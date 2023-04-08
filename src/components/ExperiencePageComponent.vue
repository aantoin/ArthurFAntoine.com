<template>
  <PageComponent :isTurned="isTurned">
    <div class="pb-2 sm:pb-4">
      <h1 class="text-4xl border-b-slate-600 border-b-4 mb-2">Education</h1>
      <div>
        <div class="block text-2xl">B.S. Computer Engineering</div>
        <div class="block text-base">Clemson University - 2015</div>
      </div>
      <div>
        <div class="block text-2xl">B.S. Electrical Engineering</div>
        <div class="block text-base">Clemson University - 2014</div>
      </div>
    </div>
    <div class="pb-2 sm:pb-4">
      <h1 class="text-4xl border-b-slate-600 border-b-4 mb-2">Work</h1>
      <div>
        <div class="block text-2xl">AIUT Inc. - Controls Engineer</div>
        <div class="block text-base">2016 - present</div>
        <ul class="list-inside list-disc">
          <li>Programming automation lines</li>
          <li>Creating tools to improve processes and test programs</li>
          <li>Inter-team cooperation and independent work</li>
          <li>Working directly with customers</li>
        </ul>
      </div>
    </div>
    <div>
      <h1 class="text-4xl border-b-slate-600 border-b-4 mb-2">Certificates</h1>
      <div class="inline-grid grid-cols-3 sm:grid-cols-4 max-h-[20%]">
        <div v-for="badge in badges" :key="badge.link"><a :href="badge.link" class="h-full">
            <img :src="badge.img" class="h-full object-cover" />
          </a></div>
      </div>
    </div>

  </PageComponent>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PageComponent from './PageComponent.vue';

defineProps<{
  isTurned: boolean,
}>()

const badges = ref([
  { link: 'https://www.credly.com/badges/b7b11d33-458c-44a0-8c66-ebba59d17a8a/public_url', img: '/static/credly/aws-certified-cloud-practitioner.png' },
  { link: 'https://www.credly.com/badges/60edb038-b6a4-4b07-9fd9-1fa34f2b8eb8/public_url', img: '/static/credly/pcep-30-02-pcep-certified-entry-level-python-programmer.png' },
])
</script>

<style scoped></style>