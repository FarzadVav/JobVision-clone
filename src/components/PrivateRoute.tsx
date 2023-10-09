import React, { lazy, useContext } from "react"

const NotFound = lazy(() => import('./../pages/NotFound'))
import authContext from "../context/AuthContext"
import LazyPage from "./LazyPage.tsx"

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = useContext(authContext)

  return auth.isLogin ? children : <LazyPage><NotFound /></LazyPage>
}

export default PrivateRoute