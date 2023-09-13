/* eslint-disable symbol-description */
import type { InjectionKey } from 'vue'
import { inject, provide, ref } from 'vue'
import type { Notification } from '@/Types/components/notification'

interface ToastProvider {
  add: (notification: Partial<Notification>) => void
  remove: (id: string) => void
}

const toastSymbol: InjectionKey<ToastProvider | any> = Symbol()

export function injectToast() {
  const notifications = ref<Notification[]>([])

  function add(notification: Partial<Notification>) {
    const body = {
      id: new Date().getTime().toString(),
      ...notification,
    }

    const index = notifications.value.findIndex((n: Notification) => n.id === body.id)
    if (index === -1)
      notifications.value.push(body as Notification)

    return body
  }

  function remove(id: string) {
    notifications.value = notifications.value.filter((n: Notification) => n.id !== id)
  }

  provide(toastSymbol, {
    notifications,
    add,
    remove,
  })

  return {
    notifications,
    add,
    remove,
  }
}

export function useToast() {
  return inject(toastSymbol)
}
