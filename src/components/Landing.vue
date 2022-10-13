<script setup>
import { useAuth0 } from '@auth0/auth0-vue';
import { useRouter } from 'vue-router';
import Button from './elements/Button.vue';

const { loginWithRedirect, isAuthenticated } = useAuth0();
const router = useRouter();

/**
 * Initialize login with redirect from auth0
 */
const login = () => {
  loginWithRedirect();
}

/**
 * Redirect to home if authenticated
 */
if (isAuthenticated.value) {
  router.push({name: 'home'});
}
</script>

<template>
  <div>
    <p class="fs-4">Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city.</p>
    <Button @click="login">Login</Button>
  </div>
</template>
