<script setup lang='ts'>

</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <UButtonGroup size="sm">
      <UButton icon="ic:round-keyboard-arrow-left" label="Previous Page" color="blue" />
      <UButton label="Next Page" :trailing="true" icon="ic:round-keyboard-arrow-right" color="purple" />
    </UButtonGroup>
  </div>
</template>
