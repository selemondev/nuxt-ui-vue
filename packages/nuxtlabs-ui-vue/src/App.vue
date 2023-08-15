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
  <div class="grid place-items-center w-full min-h-screen bg-gray-400">
    <div class="flex items-center space-x-4">
      <USkeleton
        class="h-12 w-12" :variants="{
          'my-variant': {
            rounded: 'rounded-full',
          },
        }" :variant="['my-variant']"
      />
      <div class="space-y-2">
        <USkeleton class="h-4 w-[250px]" />
        <USkeleton class="h-4 w-[200px]" />
      </div>
    </div>
  </div>
</template>
