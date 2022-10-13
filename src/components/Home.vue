<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from './elements/Button.vue';
import Search from './elements/Search.vue';
import User from './elements/User.vue';

const router = useRouter(),
      city = ref('');
      
/**
 * Initialize form submit
 */
const submit = () => {
  router.push({name: 'weather', query: {city: city.value}});
}
</script>

<template>
  <div class="text-center">
    <User></User>
    <form role="search" @submit.prevent="submit">
      <Search placeholder="City" v-model="city" required></Search>
      <div class="d-grid">
        <Button type="submit">Display Weather</Button>
      </div>
    </form>
  </div>
</template>
