<script setup lang='ts'>
import { ref } from 'vue'

const selected = ref(true)
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <!-- <UInput color="red" v-model="value" /> -->
    <UCheckbox v-model="selected" name="notifications" label="Notifications" color="red" help="Please check this box" />
  </div>
</template>
