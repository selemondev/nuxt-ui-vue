<script setup lang="ts">
const items = [{
  label: 'Introduction',
  icon: 'heroicons:information-circle',
  content: 'This is the content shown for Tab1',
}, {
  label: 'Installation',
  icon: 'heroicons:arrow-down-tray',
  content: 'And, this is the content for Tab2',
}, {
  label: 'Theming',
  icon: 'heroicons:eye-dropper',
  content: 'Finally, this is the content for Tab3',
}]
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <div>
      <UTabs
        :items="items" class="w-full"
      >
        <template #default="{ item, index, selected }">
          <div class="flex items-center gap-2 relative truncate">
            <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0" />

            <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>

            <span v-if="selected" class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400" />
          </div>
        </template>
      </UTabs>
    </div>
  </div>
</template>
