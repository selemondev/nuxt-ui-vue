<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from '@/composables/useToast'

const toast = useToast()

const show = ref(true)

function handleClose() {
  return show.value = false
}
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <div class="w-96">
      <UCard>
        <template #header />

        Body

        <template #footer />
      </UCard>
    </div>
  </div>
</template>
