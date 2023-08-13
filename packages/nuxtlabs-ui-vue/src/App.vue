<script setup lang='ts'>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <UTextarea v-model="value" />
  </div>
</template>
