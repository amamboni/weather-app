<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <div class="container">
    <Header></Header>
  </div>
  <main>
    <div class="container p-5">
      <router-view></router-view>
    </div>
  </main>
</template>
