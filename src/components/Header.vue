<script setup>
import Button from './elements/Button.vue';
import LogoName from './elements/LogoName.vue';
import logo from '../assets/logo.svg';
import { useAuth0 } from '@auth0/auth0-vue';

const { logout: authLogout, isAuthenticated } = useAuth0();

/**
 * Initialize logout from auth0
 */
const logout = () => {
  authLogout({ returnTo: window.location.origin });
}
</script>

<template>
  <header class="py-3 mb-4 border-bottom">
    <nav class="navbar navbar-expand-md" aria-label="Offcanvas navbar">
      <div class="container-fluid">
        <LogoName class="navbar-brand" :image="logo">Weather Forecast</LogoName>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar" aria-controls="navbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="navbar" aria-labelledby="navbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="navbarLabel">Menu</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body justify-content-end">
            <ul v-if="isAuthenticated" class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item"><router-link class="nav-link fs-5" :to="{name: 'home'}">Home</router-link></li>
              <li class="nav-item"><router-link class="nav-link fs-5" :to="{name: 'weather'}">Weather</router-link></li>
              <li class="nav-item d-grid"><Button @click="logout" class="ms-md-3">Logout</Button></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
