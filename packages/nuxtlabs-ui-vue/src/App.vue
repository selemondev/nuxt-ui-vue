<script setup lang='ts'>
import { ref } from 'vue'

// const value = ref('')
const countries = [{
  name: 'United States',
  value: 'US',
}, {
  name: 'Canada',
  value: 'CA',
  disabled: true,
}, {
  name: 'Mexico',
  value: 'MX',
}]

const country = ref('CA')
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <USelect v-model="country" color="purple" :options="countries" option-attribute="name" />
    <!-- <UInput v-model="value" color="cyan" icon="ph:sun" /> -->
    <!-- <UCheckbox v-model="selected" name="notifications" label="Notifications" color="blue" help="Please check this box" /> -->
  </div>
</template>
