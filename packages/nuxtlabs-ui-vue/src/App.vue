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
    <div class="w-96">
      <UAlert title="Heads <i>up</i>!" icon="heroicons:command-line">
        <template #title="{ title }">
          <span v-html="title" />
        </template>

        <template #description>
          You can add <b>components</b> to your app using the <u>cli</u>.
        </template>
      </UAlert>
    </div>
  </div>
</template>
