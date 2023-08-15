<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <div>
      <UPopover mode="hover">
        <UButton color="white" label="Open" trailing-icon="heroicons:chevron-down-20-solid" />

        <template #panel>
          <!-- Content -->
        </template>
      </UPopover>
    </div>
  </div>
</template>
