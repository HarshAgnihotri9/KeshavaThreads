import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import TShirtGrid from './components/tShirt'
import KeshavVastramBanner from './components/Banner'
import KeshavVastramGallery from './components/KeshavVastramGallery'
import ProductPage from './components/ProductPage'
import SummerCollection from './components/SummerCollection'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<Navbar/>
<MainPage/>
<TShirtGrid/>
{/* <KeshavVastramBanner/> */}
<KeshavVastramGallery/>
<SummerCollection/>
<Footer/>
{/* <ProductPage/> */}
</>
  )
}

export default App
