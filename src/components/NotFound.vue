<script setup>
import { useRouter } from 'vue-router';
import Button from './elements/Button.vue';

const router = useRouter();
</script>

<template>
  <div>
    <p class="fs-4">Page not found.</p>
    <Button @click="router.push({name: 'landing'})">&larr; Go to Landing Page</Button>
  </div>
</template>
