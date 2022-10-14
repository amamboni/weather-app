<script setup>
import { useAuth0 } from '@auth0/auth0-vue';

const { user } = useAuth0();
</script>

<template>
  <div v-if="user" class="mb-5">
    <p class="fs-4 mb-0">{{ user.name }}</p>
    <p>{{ `https://github.com/${user.nickname }` }}</p>
  </div>
</template>
