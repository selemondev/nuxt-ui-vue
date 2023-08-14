<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <UFormGroup v-slot="{ error }" label="Email" :error="!email && 'You must enter an email'" help="This is a nice email!">
      <UInput v-model="email" type="email" placeholder="Enter email" :trailing-icon="error && 'heroicons:exclamation-triangle-20-solid'" />
    </UFormGroup>
  </div>
</template>
