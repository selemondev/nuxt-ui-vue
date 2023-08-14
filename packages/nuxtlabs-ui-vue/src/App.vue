<script setup lang="ts">
import { ref } from 'vue'

const selected = ref(false)
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <UToggle
      v-model="selected" on-icon="heroicons:check-20-solid" off-icon="heroicons:x-mark-20-solid"
    />
  </div>
</template>
