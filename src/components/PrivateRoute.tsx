import React, { lazy } from "react"

const NotFound = lazy(() => import('./../pages/NotFound'))
import LazyPage from "./LazyPage.tsx"
import useAuth from "../hooks/store/useAuth.ts"

// check existing roules for keep user in route or redirect he
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLogin } = useAuth(s => s)

  return isLogin ? children : <LazyPage><NotFound /></LazyPage>
}

export default PrivateRoute