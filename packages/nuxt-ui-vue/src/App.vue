<script setup lang="ts">
import { injectToast } from './composables/useToast'
import Hello from './components/Hello.vue'

injectToast()
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <Hello />
    <UNotifications />
  </div>
</template>
