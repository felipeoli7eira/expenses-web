/* eslint-disable */

import { createContext, useEffect, useState } from 'react'
import AuthContextPropsInterface from '../../interfaces/AuthContextPropsInterface'
import { Navigate } from 'react-router-dom'
import { appRoutesMap } from '../../routes/routes'

export const AuthContext = createContext<any>({})

export default function AuthProvider({ children }: AuthContextPropsInterface) {
  const AUTH_TOKEN_NAME = '#expensesapp'

  const [isSignedIn, setIsSignedIn] = useState<boolean>(false)

  const [user, setUser] = useState<{ name: string }>({ name: '' })

  const signIn = () => {
    localStorage.setItem(AUTH_TOKEN_NAME, 'true')
    setUser({
      name: 'Felipe',
    })
    setIsSignedIn(true)
  }

  const signOut = () => {
    setUser({ name: '' })
    setIsSignedIn(false)
    localStorage.removeItem(AUTH_TOKEN_NAME)
    return <Navigate to={appRoutesMap.login.path} />
  }

  useEffect(() => {
    function loadAuthStorage() {
      const storageAuth = localStorage.getItem(AUTH_TOKEN_NAME)

      if (storageAuth) {
        setIsSignedIn(true)
        setUser({ name: 'felipe logado' })
      }
    }

    loadAuthStorage()
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, signOut, user, isSignedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

// export const useAuthContext = useContext(AuthContext)
