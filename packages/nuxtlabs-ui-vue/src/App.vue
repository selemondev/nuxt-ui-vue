<script setup lang="ts">
const people = []

const columns = [{
  key: 'id',
  label: 'ID',
}, {
  key: 'name',
  label: 'Name',
  sortable: true,
}, {
  key: 'title',
  label: 'Title',
  sortable: true,
}, {
  key: 'email',
  label: 'Email',
  sortable: true,
  direction: 'desc',
}, {
  key: 'role',
  label: 'Role',
}, {
  key: 'actions',
}]

function items(row) {
  return [
    [{
      label: 'Edit',
      icon: 'heroicons:pencil-square-20-solid',
    }, {
      label: 'Duplicate',
      icon: 'heroicons:document-duplicate-20-solid',
    }], [{
      label: 'Archive',
      icon: 'heroicons:archive-box-20-solid',
    }, {
      label: 'Move',
      icon: 'heroicons:arrow-right-circle-20-solid',
    }], [{
      label: 'Delete',
      icon: 'heroicons:trash-20-solid',
    }],
  ]
}

// const selected = ref([people[1]])

// const q = ref('')

// const filteredRows = computed(() => {
//   if (!q.value)
//     return people

//   return people.filter((person) => {
//     return Object.values(person).some((value) => {
//       return String(value).toLowerCase().includes(q.value.toLowerCase())
//     })
//   })
// })
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <div>
      <UTable :rows="people" :columns="columns">
        <template #empty-state>
          <div class="flex flex-col items-center justify-center py-6 gap-3">
            <span class="italic text-sm">No one here!</span>
            <UButton label="Add people" />
          </div>
        </template>
      </UTable>
    </div>
  </div>
</template>
