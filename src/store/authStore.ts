import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, name: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetAuthError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));
          
          if (email === 'user@elevatics.ai' && password === 'password') {
            set({
              user: {
                id: '1',
                email: 'user@elevatics.ai',
                name: 'Demo User',
              },
              isLoading: false,
            });
          } else {
            throw new Error('Invalid credentials');
          }
        } catch (error) {
          set({ error: (error as Error).message, isLoading: false });
        }
      },

      logout: () => {
        set({ user: null, error: null });
      },

      signup: async (email: string, password: string, name: string) => {
        set({ isLoading: true, error: null });
        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));
          
          // For demo purposes, allow any valid email/password
          if (email && password && name) {
            set({
              user: { 
                id: Date.now().toString(), 
                email, 
                name 
              },
              isLoading: false,
            });
          } else {
            throw new Error('Please fill in all fields');
          }
        } catch (error) {
          set({ error: (error as Error).message, isLoading: false });
        }
      },

      forgotPassword: async (email: string) => {
        set({ isLoading: true, error: null });
        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));
          
          // For demo purposes, accept any valid email
          if (email) {
            set({ isLoading: false });
            return Promise.resolve();
          } else {
            throw new Error('Please enter a valid email');
          }
        } catch (error) {
          set({ error: (error as Error).message, isLoading: false });
        }
      },

      resetAuthError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);