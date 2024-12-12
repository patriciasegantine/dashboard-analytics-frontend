import { useMutation } from '@tanstack/react-query'
import { authService } from '@/services/auth'
import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'
import { AppRoutes } from '@/constants/routes'
import type { ApiErrorResponse } from '@/types/api'
import { ResetPasswordCredentials } from "@/types/auth";
import { AUTH_MESSAGES } from "@/constants/messagens";

export function useResetPassword() {
  const {toast} = useToast()
  const router = useRouter()
  
  return useMutation({
    mutationFn: async (data: ResetPasswordCredentials) => {
      const response = await authService.resetPassword(data)
      return response
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: AUTH_MESSAGES.RESET_PASSWORD_SUCCESS,
      })
      router.push(AppRoutes.LOGIN)
    },
    onError: (error: ApiErrorResponse) => {
      let errorMessage = error.message
      
      if (error.code === 'SAME_PASSWORD') {
        errorMessage = AUTH_MESSAGES.SAME_PASSWORD
      } else if (error.code === 'INVALID_TOKEN') {
        errorMessage = AUTH_MESSAGES.INVALID_RESET_LINK
      }
      
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage || AUTH_MESSAGES.RESET_PASSWORD_FAIL
      })
    }
  })
}
