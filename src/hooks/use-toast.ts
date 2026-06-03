import toast from 'react-hot-toast'

export function useToast() {
  return {
    toast: (message: string, type: 'success' | 'error' | 'loading' = 'success') => {
      if (type === 'success') {
        toast.success(message)
      } else if (type === 'error') {
        toast.error(message)
      } else {
        toast.loading(message)
      }
    },
    success: (message: string) => toast.success(message),
    error: (message: string) => toast.error(message),
    loading: (message: string) => toast.loading(message),
  }
}
