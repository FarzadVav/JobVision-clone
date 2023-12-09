import { create } from 'zustand'
import CompanyTypes from '../../types/Company.types'

const cookieName = 'jv_token'

const removeCookieHandler = () => {
  const expiryDate = new Date()
  document.cookie = `${cookieName}=none;path=/;expires=${expiryDate}`
}

type useAuthTypes = {
  isLogin: boolean;
  company: CompanyTypes;
  loginHandler: (token: string) => void;
  logOutHandler: () => void;
  getToken: () => string;
}

const useAuth = create<useAuthTypes>(set => ({
  isLogin: true,
  company: {} as CompanyTypes,
  loginHandler: (token: string) => {
    removeCookieHandler()
    const expiryDate = new Date()
    expiryDate.setMonth(expiryDate.getMonth() + 1)
    document.cookie = `${cookieName}=${token};path=/;expires=${expiryDate}`
    set({ isLogin: true })
  },
  logOutHandler: () => {
    removeCookieHandler()
    set({ isLogin: false })
  },
  getToken: () => {
    return document.cookie.split(';').find(c => c.trim().startsWith(`${cookieName}=`))?.split('=')[1] || ''
  }
}))

export default useAuth