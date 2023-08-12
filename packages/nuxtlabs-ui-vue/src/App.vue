<script setup lang='ts'>
const items = [
  [{
    label: 'ben@example.com',
    slot: 'account',
    disabled: true,
  }], [{
    label: 'Settings',
    icon: 'heroicons:cog-8-tooth',
  }], [{
    label: 'Documentation',
    icon: 'heroicons:book-open',
  }, {
    label: 'Changelog',
    icon: 'heroicons:megaphone',
  }, {
    label: 'Status',
    icon: 'heroicons:signal',
  }], [{
    label: 'Sign out',
    icon: 'heroicons:arrow-left-on-rectangle',
  }],
]
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <UButton label="button" to="/about" />
  </div>
</template>
