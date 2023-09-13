<script setup lang="ts">
import { useToast } from '@/composables/useToast'

const toast = useToast()
</script>

<template>
  <UButton
    label="Show toast" @click="toast.add({
      title: 'Update downloaded.',
    })"
  />
</template>
