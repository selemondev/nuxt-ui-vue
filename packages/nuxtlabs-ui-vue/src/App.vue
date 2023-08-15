<script setup lang="ts">
import { ref } from 'vue'
import { useMouse, useWindowScroll } from '@vueuse/core'

const { x, y } = useMouse()
const { y: windowY } = useWindowScroll()

const isOpen = ref(false)
const virtualElement = ref({ getBoundingClientRect: () => ({}) })

function onContextMenu() {
  const top = unref(y) - unref(windowY)
  const left = unref(x)

  virtualElement.value.getBoundingClientRect = () => ({
    width: 0,
    height: 0,
    top,
    left,
  })

  isOpen.value = true
}
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <div @contextmenu.prevent="onContextMenu">
      <UContextMenu v-model="isOpen" :virtual-element="virtualElement" />
    </div>
  </div>
</template>
