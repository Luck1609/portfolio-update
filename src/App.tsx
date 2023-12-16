import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout"
import Page from "./pages"
import AuthLayout from "./layout/AuthLayout"
import Login from "./pages/Auth/Login"
import ForgotPassword from "./pages/Auth/ForgotPassword"
import ResetPassword from "./pages/Auth/ResetPassword"

function App() {
  console.log("App ready")

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
