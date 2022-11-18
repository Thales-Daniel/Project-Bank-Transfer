import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Login from "../pages/Login"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router
