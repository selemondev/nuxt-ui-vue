<script setup lang='ts'>
const items = [{
  label: 'Getting Started',
  icon: 'ph:sun',
  defaultOpen: true,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
}, {
  label: 'Installation',
  icon: 'ph:moon',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
}]
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <UAccordion
      :variants="{
        'my-variant': {
          root: 'w-48',
        },
      }" :variant="['my-variant']" color="red" :items="items"
    />
  </div>
</template>
