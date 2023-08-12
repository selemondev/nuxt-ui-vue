import { inject } from 'vue'
import type { UseEventBusReturn } from '@vueuse/core'
import type { FormEvent } from '@/Types/components/form'

export function useFormEvents() {
  const formBus = inject<UseEventBusReturn<FormEvent, string> | undefined>('form-events', undefined)
  const formPath = inject<string | undefined>('form-path', undefined)

  const emitFormBlur = () => {
    if (formBus && formPath)
      formBus.emit({ type: 'blur', path: formPath })
  }

  return {
    emitFormBlur,
  }
}
