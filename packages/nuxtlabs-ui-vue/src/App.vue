<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <UFormGroup label="Email" error>
      <UInput placeholder="you@example.com" />
    </UFormGroup>
  </div>
</template>
