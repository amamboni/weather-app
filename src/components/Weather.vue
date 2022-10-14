<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { format } from 'date-fns';
import Button from './elements/Button.vue';
import axios from 'axios';
import _ from 'lodash';

const router = useRouter(),
      route = useRoute(),
      { city } = route.query,
      loading = ref(false),
      error = ref(''),
      result = ref({
        date: '',
        temp: '',
        pressure: '',
        humidity: '',
        description: '',
        main: '',
        name: '',
      });

/**
 * Get weather data from OpenWeather API
 */
const getWeather = () => {
  loading.value = true;

  // URL of the OpenWeather API
  const url = import.meta.env.VITE_OPEN_WEATHER_API_URL;
  const params = {
    q: city, // Name of the city
    appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY, // API Key
    units: 'imperial', // Units convention. See: https://openweathermap.org/current#data
  };
  axios.get(url, {params}).then(response => {
    const data = response.data;
    
    const main = data.main || { temp: '', pressure: '', humidity: ''}; // Set default value if undefined
    const weather = data.weather && data.weather.length ? data.weather[0] : {description: '', main: ''}; // Set default value if undefined
    const date = data.dt ? format(data.dt*1000, 'MM/dd/yyyy') : ''; // Format date from timestamp
    result.value = {
      date,
      temp: main.temp,
      pressure: main.pressure,
      humidity: main.humidity,
      description: _.startCase(weather.description),
      main: _.startCase(weather.main),
      name: data.name,
    }
  }).catch(err => {
    // Get error message from response
    error.value = _.startCase(_.get(err, 'response.data.message', ''));
  }).finally(() => {
    loading.value = false;
  })
}

getWeather();
</script>

<template>
  <div>
    <h1 v-if="result.name">{{ result.name }}</h1>
    <table class="table table-striped">
      <thead>
        <tr class="text-nowrap">
          <th scope="col">Date (mm/dd/yyyy)</th>
          <th scope="col">Temp (F)</th>
          <th scope="col" class="td-responsive">Description</th>
          <th scope="col" class="td-responsive">Main</th>
          <th scope="col" class="td-responsive">Pressure</th>
          <th scope="col" class="td-responsive">Humidity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading">
          <td colspan="6">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </td>
        </tr>
        <tr v-else-if="error">
          <td colspan="6">
            <div class="alert alert-danger mb-0" role="alert">{{ error }}</div>
          </td>
        </tr>
        <tr v-else>
          <td>{{ result.date }}</td>
          <td>{{ result.temp }}</td>
          <td class="td-responsive">{{ result.description }}</td>
          <td class="td-responsive">{{ result.main }}</td>
          <td class="td-responsive">{{ result.pressure }}</td>
          <td class="td-responsive">{{ result.humidity }}</td>
        </tr>
      </tbody>
    </table>
    <div class="text-end">
      <Button @click="router.push({name: 'home'})">Back</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
.td-responsive {
  @include media-breakpoint-down(md) {
    display: none
  }
}
</style>
