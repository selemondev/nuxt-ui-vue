<script setup lang='ts'>
import { ComboboxOption as HComboboxOption } from '@headlessui/vue'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import type { Group } from '@/Types/components/command-palette'
import type { UCommandPalette } from '@/Types/componentsTypes/components'

defineOptions({
  name: Components.UCommandPaletteGroup,
})

const props = defineProps({
  group: {
    type: Object as PropType<Group>,
    required: true,
  },
  query: {
    type: String,
    default: '',
  },
  groupAttribute: {
    type: String,
    required: true,
  },
  commandAttribute: {
    type: String,
    required: true,
  },
  selectedIcon: {
    type: String,
    required: true,
  },
})

const variant = computed(() => {
  const customProps = {
    ...props,
  }
  return useVariants<UCommandPalette>(
    Components.UCommandPalette,
    customProps as VariantJSWithClassesListProps<UCommandPalette>,
  )
})

const label = computed(() => {
  const label = props.group[props.groupAttribute]

  return typeof label === 'function' ? label(props.query) : label
})

function highlight(text: string, { indices, value }: { indices: number[][]; value: string }): string {
  if (text === value)
    return ''

  let content = ''
  let nextUnhighlightedIndiceStartingIndex = 0

  indices.forEach((indice) => {
    const lastIndiceNextIndex = indice[1] + 1
    const isMatched = (lastIndiceNextIndex - indice[0]) >= props.query.length

    content += [
      value.substring(nextUnhighlightedIndiceStartingIndex, indice[0]),
      isMatched && '<mark>',
      value.substring(indice[0], lastIndiceNextIndex),
      isMatched && '</mark>',
    ].filter(Boolean).join('')

    nextUnhighlightedIndiceStartingIndex = lastIndiceNextIndex
  })

  content += value.substring(nextUnhighlightedIndiceStartingIndex)

  const index = content.indexOf('<mark>')
  if (index > 60)
    content = `...${content.substring(index - 60)}`

  return content
}
</script>

<template>
  <div :class="variant.groupWrapper" role="option">
    <h2 v-if="label" :class="variant.groupLabel">
      {{ label }}
    </h2>

    <div :class="variant.groupContainer" role="listbox" :aria-label="group[groupAttribute]">
      <HComboboxOption
        v-for="(command, index) of group.commands"
        :key="`${group.key}-${index}`"
        v-slot="{ active, selected }"
        :value="command"
        :disabled="command.disabled"
        as="template"
      >
        <div :class="[variant.groupCommandBase, active ? variant.groupCommandActive : variant.groupCommandInactive, command.disabled ? 'cursor-not-allowed' : 'cursor-pointer']">
          <div :class="variant.groupCommandContainer">
            <slot :name="`${group.key}-icon`" :group="group" :command="command" :active="active" :selected="selected">
              <UIcon v-if="command.icon" :name="command.icon" :class="[variant.groupCommandIconBase, active ? variant.groupCommandIconActive : variant.groupCommandIconInactive, command.iconClass]" aria-hidden="true" />
              <UAvatar
                v-else-if="command.avatar"
                v-bind="{ size: variant.groupCommandAvatarSize, ...command.avatar }"
                :class="variant.groupCommandAvatarBase"
                aria-hidden="true"
              />
              <span v-else-if="command.chip" :class="variant.groupCommandChipBase" :style="{ background: `#${command.chip}` }" />
            </slot>

            <div :class="[variant.groupCommandLabel, command.disabled && variant.groupCommandDisabled]">
              <slot :name="`${group.key}-command`" :group="group" :command="command" :active="active" :selected="selected">
                <span v-if="command.prefix" class="flex-shrink-0" :class="command.prefixClass || variant.groupCommandPrefix">{{ command.prefix }}</span>

                <span class="truncate" :class="{ 'flex-none': command.suffix || command.matches?.length }">{{ command[commandAttribute] }}</span>

                <!-- eslint-disable-next-line vue/no-v-html -->
                <span v-if="command.matches?.length" class="truncate" :class="command.suffixClass || variant.groupCommandSuffix" v-html="highlight(command[commandAttribute], command.matches[0])" />
                <span v-else-if="command.suffix" class="truncate" :class="command.suffixClass || variant.groupCommandSuffix">{{ command.suffix }}</span>
              </slot>
            </div>
          </div>

          <UIcon v-if="selected" :name="selectedIcon" :class="variant.groupCommandSelectedIconBase" aria-hidden="true" />
          <slot
            v-else-if="active && (group.active || $slots[`${group.key}-active`])"
            :name="`${group.key}-active`"
            :group="group"
            :command="command"
            :active="active"
            :selected="selected"
          >
            <span v-if="group.active" :class="variant.groupCommandActive">{{ group.active }}</span>
          </slot>
          <slot
            v-else
            :name="`${group.key}-inactive`"
            :group="group"
            :command="command"
            :active="active"
            :selected="selected"
          >
            <span v-if="command.shortcuts?.length" :class="variant.groupCommandShortcuts">
              <UKbd v-for="shortcut of command.shortcuts" :key="shortcut">{{ shortcut }}</UKbd>
            </span>
            <span v-else-if="!command.disabled && group.inactive" :class="variant.groupInactive">{{ group.inactive }}</span>
          </slot>
        </div>
      </HComboboxOption>
    </div>
  </div>
</template>

<style scoped>
mark {
  @apply bg-green-400;
}
</style>
