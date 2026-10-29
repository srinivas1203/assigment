import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import SmoothScroll from './components/motion/SmoothScroll.jsx'
import useScrollToTop from './hooks/useScrollToTop.js'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'

function ScrollToTop() {
  useScrollToTop()
  return null
}

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
