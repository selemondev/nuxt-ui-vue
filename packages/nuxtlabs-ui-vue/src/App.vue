<script setup lang='ts'>

</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <UAvatarGroup :max="3">
      <UAvatar alt="Selemon Brahanu" chip-color="green" chip-text="Offline" chip-position="bottom-left" />
      <UAvatar
        chip-color="purple" chip-text="Online"
        src="https://github.com/selemondev.png"
      />
      <UAvatar chip-color="red" src="https://github.com/selemondev.png" />
      <UAvatar src="https://github.com/selemondev.png" />
    </UAvatarGroup>
  </div>
</template>
