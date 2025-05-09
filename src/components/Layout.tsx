import { Outlet } from 'react-router-dom'
import { Header } from './modules/Header'
import { Footer } from './modules/Footer'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
} 