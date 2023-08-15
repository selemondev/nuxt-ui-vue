<script setup lang="ts">
import { ref } from 'vue'

const page = ref(1)
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <div class="w-96">
      <UPagination v-model="page" :max="5" :page-count="5" :total="100" :prev-button="{ icon: 'heroicons:arrow-small-left-20-solid', label: 'Prev', color: 'gray' }" :next-button="{ icon: 'heroicons:arrow-small-right-20-solid', trailing: true, label: 'Next', color: 'gray' }" />
    </div>
  </div>
</template>
