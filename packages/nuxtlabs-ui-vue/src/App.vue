<script setup lang='ts'>
import { ref } from 'vue'

const people = [{
  id: 'benjamincanac',
  label: 'benjamincanac',
},
{
  id: 'Atinux',
  label: 'Atinux',
},
{
  id: 'smarroufin',
  label: 'smarroufin',
},
{
  id: 'nobody',
  label: 'Nobody',
}]

const selected = ref(people[3])
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <USelectMenu
      v-slot="{ open }" v-model="selected" :variants="{
        'my-variant': {
          base: '!w-full',
        },
      }" :variant="['my-variant']" :options="people"
    >
      <UButton color="gray">
        {{ selected.label }}

        <UIcon name="heroicons:chevron-right-20-solid" class="w-5 h-5 transition-transform" :class="[open && 'transform rotate-90']" />
      </UButton>
    </USelectMenu>
  </div>
</template>
