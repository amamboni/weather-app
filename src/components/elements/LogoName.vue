<script setup>
defineProps({
  /**
   * The image used for the logo.
   */
  image: {
    type: String,
    default: '',
  }
});
</script>

<template>
  <router-link to="/" class="d-flex align-items-center me-auto text-dark text-decoration-none">
    <img v-if="image" alt="Logo" class="bi me-2" :src="image" width="64" height="64" />
    <span class="fs-4"><slot></slot></span>
  </router-link>
</template>
