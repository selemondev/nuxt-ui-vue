<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <div class="grid place-items-center min-h-screen w-full">
    <UButton label="Open" @click="isOpen = true" />
    <UModal v-model="isOpen" fullscreen>
      <!-- Content -->
    </UModal>
  </div>
</template>
