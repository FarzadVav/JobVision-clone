import React, { useContext } from "react"
import { Navigate } from "react-router-dom"

import authContext from "../context/AuthContext"

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = useContext(authContext)

  return auth.isLogin ? children : <Navigate to={`/404`} />
}

export default PrivateRoute