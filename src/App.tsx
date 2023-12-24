import { BrowserRouter, Routes, Route } from "react-router-dom"
import useSWR from "swr";
import Layout from "./layout"
import Page from "./pages"
import AuthLayout from "./layout/AuthLayout"
import Login from "./pages/Auth/Login"
import ForgotPassword from "./pages/Auth/ForgotPassword"
import ResetPassword from "./pages/Auth/ResetPassword"
import { useEffect } from "react";
import { useStateUpdate } from "./hooks/useStateUpdate";
import { USER } from "./reducer/types";

function App() {
  const { data: user } = useSWR("/auth/me");
  const { dispatch } = useStateUpdate()

  useEffect(() => {
    if (user) {
      dispatch({ type: USER, payload: user })
    }
  
    // return () => {
    //   second
    // }
  }, [user, dispatch])
  

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Page />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
