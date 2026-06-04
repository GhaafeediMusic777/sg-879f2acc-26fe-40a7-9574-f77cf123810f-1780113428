import { createContext, useContext, useState, ReactNode } from 'react'

interface GoogleUser {
  id: string
  name: string
  email: string
  picture: string
}

interface GoogleAuthContextType {
  user: GoogleUser | null
  isLoading: boolean
  login: (credential: string) => void
  logout: () => void
}

const GoogleAuthContext = createContext<GoogleAuthContextType | undefined>(undefined)

export function GoogleAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<GoogleUser | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const login = (credential: string) => {
    setIsLoading(true)
    try {
      // Decode JWT token to get user info
      const base64Url = credential.split('.')[1]
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      )
      const decodedToken = JSON.parse(jsonPayload)

      const userData: GoogleUser = {
        id: decodedToken.sub,
        name: decodedToken.name,
        email: decodedToken.email,
        picture: decodedToken.picture
      }

      setUser(userData)
      localStorage.setItem('googleUser', JSON.stringify(userData))
      localStorage.setItem('googleToken', credential)
    } catch (error) {
      console.error('Failed to decode token:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('googleUser')
    localStorage.removeItem('googleToken')
  }

  return (
    <GoogleAuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </GoogleAuthContext.Provider>
  )
}

export function useGoogleAuth() {
  const context = useContext(GoogleAuthContext)
  if (context === undefined) {
    throw new Error('useGoogleAuth must be used within GoogleAuthProvider')
  }
  return context
}
