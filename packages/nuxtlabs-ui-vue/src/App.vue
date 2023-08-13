<script setup lang='ts'>
import { ref } from 'vue'

const value = ref(50)
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <URange v-model="value" color="amber" />
    <!-- <UToggle v-model="selected" color="cyan" on-icon="heroicons:check-20-solid" off-icon="heroicons:x-mark-20-solid" /> -->
    <!-- <USelect v-model="country" color="purple" :options="countries" option-attribute="name" /> -->
    <!-- <UInput v-model="value" color="cyan" icon="ph:sun" /> -->
    <!-- <UCheckbox v-model="selected" name="notifications" label="Notifications" color="blue" help="Please check this box" /> -->
  </div>
</template>
