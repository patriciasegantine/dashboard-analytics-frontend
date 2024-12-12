import { api } from './api'
import { API_ROUTES } from '@/constants/api'
import type {
  AuthResponse,
  ForgotPasswordCredentials,
  LoginCredentials,
  RegisterCredentials,
  ResetPasswordCredentials
} from '@/types/auth'
import type { ApiResponse } from '@/types/api'
import { AppRoutes } from "@/constants/routes";

export const authService = {
  async login(credentials: LoginCredentials): Promise<ApiResponse<AuthResponse>> {
    const response = await api.post(API_ROUTES.AUTH.LOGIN, credentials)
    return response.data
  },
  
  async register(credentials: RegisterCredentials): Promise<ApiResponse<AuthResponse>> {
    const response = await api.post(API_ROUTES.AUTH.REGISTER, credentials)
    return response.data
  },
  
  async forgotPassword(credentials: ForgotPasswordCredentials): Promise<ApiResponse<void>> {
    const response = await api.post(API_ROUTES.AUTH.FORGOT_PASSWORD, {
      ...credentials,
      redirectTo: AppRoutes.RESET_PASSWORD,
      baseUrl: window.location.origin
    })
    
    return response.data
  },
  
  async resetPassword(credentials: ResetPasswordCredentials): Promise<ApiResponse<void>> {
    const response = await api.post(API_ROUTES.AUTH.RESET_PASSWORD, credentials)
    return response.data
  },
  
  logout() {
    localStorage.removeItem('@nexus:token')
    localStorage.removeItem('@nexus:user')
  }
}
