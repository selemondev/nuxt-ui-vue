<script setup lang='ts'>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <UButton label="Open" @click="isOpen = true" />
    <USlideover v-model="isOpen" prevent-close>
      <UCard
        class="flex flex-col flex-1"
        :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Slideover
            </h3>
            <UButton intent="ghost" icon="heroicons:x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>
      </UCard>
    </USlideover>
  </div>
</template>
