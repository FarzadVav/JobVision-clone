import { createContext, useState, useEffect } from 'react'

import getToken from '../utils/getToken';
import tokenGenerator from '../utils/tokenGenerator';

type authTypes = {
  isLogin: boolean;
  loginHandler: () => void;
  logOutHandler: () => void;
}
const authContext = createContext({} as authTypes)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false)

  useEffect(() => {
    if (getToken()) loginHandler()
    else logOutHandler()
  }, [])

  const loginHandler = () => {
    const expiryDate = new Date()
    expiryDate.setMonth(expiryDate.getMonth() + 1)
    document.cookie = `jv_token=${tokenGenerator()}; expires=${expiryDate}`;
    setIsLogin(true)
  }
  const logOutHandler = () => {
    const expiryDate = new Date()
    document.cookie = `jv_token=none; expires=${expiryDate}`
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