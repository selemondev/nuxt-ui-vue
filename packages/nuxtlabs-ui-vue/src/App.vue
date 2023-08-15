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
  <div>
    <UNotification v-if="show" id="id" title="Toast" description="This is the title description" :close-button="{ icon: 'heroicons:archive-box-x-mark', color: 'green', intent: 'outline', padded: true, size: 'xs', ui: { rounded: 'rounded-full' } }" @close="handleClose()" />
  </div>
</template>
