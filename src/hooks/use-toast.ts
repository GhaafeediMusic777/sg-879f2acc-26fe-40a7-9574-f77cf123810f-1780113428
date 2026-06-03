import toast from 'react-hot-toast'

export interface ToastOptions {
  title?: string
  description?: string
  variant?: 'default' | 'destructive' | 'success'
}

export function useToast() {
  const showToast = (options: ToastOptions | string) => {
    if (typeof options === 'string') {
      toast.success(options)
      return
    }

    const { title, description, variant } = options
    const message = description || title || 'Notification'

    switch (variant) {
      case 'destructive':
        toast.error(message)
        break
      case 'success':
        toast.success(message)
        break
      default:
        toast(message)
    }
  }

  return {
    toast: showToast,
    success: (message: string) => toast.success(message),
    error: (message: string) => toast.error(message),
    loading: (message: string) => toast.loading(message),
  }
}
