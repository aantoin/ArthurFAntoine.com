<template>
  <PageComponent :isTurned="isTurned">
    <div class="flex flex-col h-full">
      <div class="flex-grow">
        <h1 class="text-4xl border-b-slate-600 border-b-4 mb-2">Contact Me</h1>
        <div v-if="messageSuccess">
          Your message has been sent!
        </div>
        <form v-else @submit.prevent="submitForm" class="text-2xl">
          <label>
            Your email:
            <input type="email" name="email" class="block border-slate-600 border-2 rounded-lg w-full max-w-[300px]"
              v-model="emailInput" required>
          </label>
          <label>
            Your message:
            <textarea name="message" class="block border-slate-600 border-2 rounded-lg w-full" v-model="messageInput"
              required></textarea>
          </label>
          <div class="pt-2"><button type="submit"
              class="border-slate-600 border-2 hover:bg-slate-600 hover:text-white rounded-lg p-2">Send</button>
          </div>
          <div v-for="(error, index) in errors" :key="'error-' + index" class="p-2 bg-red-400 text-center my-2">{{
            error.message }}
          </div>
        </form>
      </div>
      <div class="flex flex-nowrap flex-grow-0 justify-around w-full text-6xl py-4">
        <a class="hover:text-slate-900 cursor-pointer" href="mailto:aantoin@g.clemson.edu"
          target="_blank"><font-awesome-icon icon="fa-regular fa-envelope" /></a>
        <a class="hover:text-slate-900 cursor-pointer" href="https://github.com/aantoin"
          target="_blank"><font-awesome-icon icon="fa-brands fa-github" /></a>
        <a class="hover:text-slate-900 cursor-pointer" href="https://www.linkedin.com/in/arthur-f-antoine-v/"
          target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
      </div>
    </div>
  </PageComponent>
</template>

<script setup lang="ts">
import PageComponent from './PageComponent.vue';
import axios from 'axios'
import { ref } from 'vue';

defineProps<{
  isTurned: boolean,
}>()

const emailInput = ref('');
const messageInput = ref('');
const messageSuccess = ref(false);
const errors = ref<any>([]);
const submitForm = () => {
  axios.post("https://formspree.io/f/xeqwrenz", { email: emailInput.value, message: messageInput.value }).then(response => {
    console.log("Response", response);
    if (response.status == 200) {
      messageSuccess.value = true;
    }
    else {
      errors.value = response.data.errors;
    }
  }).catch(e => { errors.value = e.response.data.errors; console.log("Error", e); })
}
</script>

<style scoped></style>