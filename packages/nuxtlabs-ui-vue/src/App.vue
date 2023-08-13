<script setup lang='ts'>
import { ref } from 'vue'

const methods = [{
  name: 'email',
  value: 'email',
  label: 'Email',
}, {
  name: 'sms',
  value: 'sms',
  label: 'Phone (SMS)',
}, {
  name: 'push',
  value: 'push',
  label: 'Push notification',
}]

const selected = ref('sms')
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <URadio v-for="method of methods" :key="method.name" v-model="selected" color="cyan" v-bind="method" />
    <!-- <USelect v-model="country" color="purple" :options="countries" option-attribute="name" /> -->
    <!-- <UInput v-model="value" color="cyan" icon="ph:sun" /> -->
    <!-- <UCheckbox v-model="selected" name="notifications" label="Notifications" color="blue" help="Please check this box" /> -->
  </div>
</template>
