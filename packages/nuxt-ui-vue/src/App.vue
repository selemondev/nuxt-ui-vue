<script setup lang="ts">
import { ref } from 'vue'

import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()

const toggleTheme = useToggle(isDark)

const searchTerm = ref('')
</script>

<template>
  <div>
    <button @click="toggleTheme()">
      Theme
    </button>
  </div>
  <div class="dark:bg-black grid place-items-center min-h-screen w-full">
    <UInput
      v-model="searchTerm" color="white" :variants="{
        'my-variant': {
          placeholder: 'dark:bg-transparent',
        },
      }" :variant="['my-variant']" name="searchTerm" placeholder="Search..." icon="heroicons:magnifying-glass-20-solid"
    >
      <template #trailing>
        <UButton
          v-show="searchTerm !== ''"
          color="gray"
          intent="link"
          icon="heroicons:x-mark-20-solid"
          :padded="false"
          @click="searchTerm = ''"
        />
      </template>
    </UInput>
  </div>
</template>
