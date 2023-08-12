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
    <UDropdown :items="items" mode="hover" :popper="{ placement: 'bottom-start' }">
      <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />

      <template #account="{ item }">
        <div class="text-left">
          <p>
            Signed in as
          </p>
          <p class="truncate font-medium text-gray-900 dark:text-white">
            {{ item.label }}
          </p>
        </div>
      </template>

      <template #item="{ item }">
        <span class="truncate">{{ item.label }}</span>

        <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
      </template>
    </UDropdown>
  </div>
</template>
