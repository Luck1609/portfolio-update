import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className="w-screen h-screen grid grid-cols-6">
      <div className="col-span-4 bg-code bg-cover relative overlay flex items-center justify-center">
        <div className="text-center text-white z-10">
          <h2 className="text-7xl font-black mb-3 text-white leading-snug">Welcome to Lucky Dev's Dashboard</h2>
        </div>
      </div>

      <div className="w-full flex justify-center items-center col-span-2">
        <div className="p-5 w-10/12">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
