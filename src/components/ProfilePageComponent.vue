<template>
  <PageComponent :isTurned="isTurned">
    <div class="w-full h-full flex flex-col">
      <div class="flex-grow-0 p-2 md:p-8 flex flex-col flex-nowrap w-full">
        <div class="flex flex-nowrap flex-row justify-between items-center text-4xl border-b-slate-600 border-b-4 mb-2">
          <div class="">Arthur Antoine</div>
          <a download href="/static/downloads/Arthur_Antoine_Resume.docx">
            <div class="m-2 p-2 text-2xl border-2 border-slate-600 rounded-full whitespace-nowrap">Resume
              <font-awesome-icon icon="fa-regular fa-circle-down" />
            </div>
          </a>
        </div>
        <div class="">Highly motivated software engineer seeking to utilize
          my knowledge and skills in the creation of impactful software applications.</div>
      </div>
      <div class="w-full p-2 sm:p-8 sm:pt-0">
        <h1 class="text-4xl">What I know</h1>
        <div class="flex flex-wrap md:flex-nowrap">
          <ul
            class="flex-grow grid grid-cols-[repeat(auto-fill,_58px)] sm:grid-cols-[repeat(auto-fill,_70px)] md:grid-cols-[repeat(auto-fill,_100px)]">
            <li v-for="(tech, index) in technologies" :key="'tech_' + index" class="p-1 md:p-2">
              <div class="border-4 p-1 md:p-2 rounded-lg">
                <img :src="'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/' + tech.icon + '.svg'"
                  :style="{ 'transform': 'rotateY(0deg)' }" />
              </div>
            </li>
          </ul>
        </div>

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

const technologies = ref([
  { icon: 'python/python-original-wordmark' },
  { icon: 'django/django-plain-wordmark' },
  { icon: 'flask/flask-original-wordmark' },
  { icon: 'mysql/mysql-original-wordmark' },
  { icon: 'html5/html5-original-wordmark' },
  { icon: 'css3/css3-original-wordmark' },
  { icon: 'tailwindcss/tailwindcss-original-wordmark' },
  { icon: 'typescript/typescript-original' },
  { icon: 'vuejs/vuejs-original-wordmark' },
  { icon: 'react/react-original-wordmark' },
  { icon: 'docker/docker-plain-wordmark' },
  { icon: 'amazonwebservices/amazonwebservices-original-wordmark' },
  { icon: 'cplusplus/cplusplus-original' },
  { icon: 'opengl/opengl-original' },
])
</script>

<style scoped></style>