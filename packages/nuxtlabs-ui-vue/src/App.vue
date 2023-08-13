<script setup lang='ts'>
import { ref } from 'vue'

const countries = [{
  name: 'United States',
  value: 'US',
}, {
  name: 'Canada',
  value: 'CA',
  disabled: true,
}, {
  name: 'Mexico',
  value: 'MX',
}]

const country = ref('CA')
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <USelect v-model="country" color="green" placeholder="Search..." :options="countries">
      <template #leading>
        <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" size="3xs" />
      </template>
      <template #trailing>
        <UIcon name="heroicons:arrows-up-down-20-solid" />
      </template>
    </USelect>
  </div>
</template>
