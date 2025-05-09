import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Company from './pages/Company'
import Service from './pages/Service'
import Recruit from './pages/Recruit'
import Layout from './components/Layout'
import PrivacyPolicy from './pages/PrivacyPolicy'
import SCTL from './pages/SCTL'
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company" element={<Company />} />
        <Route path="/service" element={<Service />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/sctl" element={<SCTL />} />
      </Route>
    </Routes>
  )
}

export default App