import React from 'react'
import { assets } from '../../assets/assets'

function AdminLogo() {
  return (
    <div className="mb-6 sm:mb-8">
    <img
      src={assets.logo}
      alt="logo"
      className="w-24 sm:w-32 md:w-36 h-auto object-cover rounded-lg"
    />
  </div>
  )
}

export default AdminLogo
