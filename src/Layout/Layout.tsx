import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Layout() {
  return (
    <div className="flex items-center justify-center h-screen overflow-x-hidden">
      <Navbar />
      <Outlet />
    </div>
  )
}
