<script setup>
import search from '../../assets/search.svg';

/**
 * Define props
 */
defineProps({
  /**
   * Property for use in v-model.
   */
  modelValue: {
    type: String,
    default: '',
  },
  /**
   * The placeholder for the input box.
   */
  placeholder: {
    type: String,
    default: 'Search',
  },
});

/**
 * Define emits
 */
const emit = defineEmits(['update:modelValue']);

/**
 * Catch input value
 * @arg {any} event - Event from the element
 */
const input = (event) => {
  emit('update:modelValue', event.target.value);
}
</script>

<template>
  <div class="input-group mb-3">
    <span class="input-group-text" id="search-addon">
      <img alt="Search" :src="search" width="16" height="16" />
    </span>
    <div class="form-floating">
      <input type="search"
        class="form-control form-control-lg"
        id="floatingInput" 
        :placeholder="placeholder"
        aria-label="Search"
        aria-describedby="search-addon"
        :value="modelValue"
        @input="input"
        required>
      <label for="floatingInput">{{ placeholder }}</label>
    </div>
  </div>
</template>
