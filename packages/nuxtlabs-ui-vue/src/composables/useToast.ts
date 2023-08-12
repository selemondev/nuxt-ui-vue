import { ref } from 'vue'
import type { Notification } from '@/Types/components/notification'

export function useToast() {
  const notifications = ref([])

  function add(notification: Partial<Notification>) {
    const body = {
      id: new Date().getTime().toString(),
      ...notification,
    }

    const index = notifications.value.findIndex((n: Notification) => n.id === body.id)
    if (index === -1)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
      notifications.value.push(body as Notification)

    return body
  }

  function remove(id: string) {
    notifications.value = notifications.value.filter((n: Notification) => n.id !== id)
  }

  return {
    add,
    remove,
  }
}
