<script setup lang='ts'>
import { ref } from 'vue'

import UInput from './components/forms/Input/UInput.vue'

const value = ref('')
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <UInput
      v-model="value" loading icon="ph:sun"
    />
  </div>
</template>
