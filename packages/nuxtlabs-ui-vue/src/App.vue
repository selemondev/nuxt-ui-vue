<script setup lang="ts">
const links = [{
  label: 'Profile',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/739984?v=4',
  },
  badge: 100,
}, {
  label: 'Installation',
  icon: 'heroicons:home',
  to: '/getting-started/installation',
}, {
  label: 'Vertical Navigation',
  icon: 'heroicons:chart-bar',
  to: '/navigation/vertical-navigation',
}, {
  label: 'Command Palette',
  icon: 'heroicons:command-line',
  to: '/navigation/command-palette',
}]
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <div>
      <UVerticalNavigation
        :links="links"
      />
    </div>
  </div>
</template>
