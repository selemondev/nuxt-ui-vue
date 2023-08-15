<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <div>
      <UButton label="Open" @click="isOpen = true" />

      <USlideover
        v-model="isOpen"
      >
      <!-- Content -->
      </USlideover>
    </div>
  </div>
</template>
