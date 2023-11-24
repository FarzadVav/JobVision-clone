import { createContext, useState, useEffect } from 'react'
import getToken from '../utils/getToken';
import supabase from '../utils/supabase';

type authTypes = {
  isLogin: boolean;
  loginHandler: (token: string) => void;
  logOutHandler: () => void;
}
const authContext = createContext({} as authTypes)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState<boolean>(true)

  useEffect(() => {
    const func = async () => {
      const { data: companies } = await supabase
        .from('companies')
        .select('*')

      let validation = false
      const myToken = getToken()
      companies?.forEach(company => {
        if (company.token === myToken) {
          validation = true
        }
      })

      !validation && logOutHandler()
    }
    func()
  }, [])

  const loginHandler = (token: string) => {
    logOutHandler()
    const expiryDate = new Date()
    expiryDate.setMonth(expiryDate.getMonth() + 1)
    document.cookie = `jv_token=${token};path=/;expires=${expiryDate}`
    setIsLogin(true)
  }

  const logOutHandler = () => {
    const expiryDate = new Date()
    document.cookie = `jv_token=none;path=/;expires=${expiryDate}`
    setIsLogin(false)
  }

  return (
    <authContext.Provider
      value={{
        isLogin,
        loginHandler,
        logOutHandler
      }}
    >
      {children}
    </authContext.Provider>
  )
}

export default authContext