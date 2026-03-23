import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './com/Landing/Nav'
import Hero from './com/Landing/Hero'
import Footer from './com/Landing/footer'
import Page2 from './com/pag2';
import Page3 from './com/page3'
import Product_Comparison from './com/pag4'
import Cart from './com/pag5'
import Checkout, { Contact } from './com/pag6'
import Blog from './com/pag7'
import { Route,Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
<>
<Nav></Nav>
<Routes>
  <Route path='/Furniture-web'element={<Hero/>}/>
  <Route path='/Furniture-web/Shop' element={<Page2/>}/>
  <Route path='/Furniture-web/Proudct' element={<Page3/>}/>
  <Route path='/Furniture-web/Product_Comparison'element={<Product_Comparison/>}/>
  <Route path='/Furniture-web/Cart' element={<Cart/>}/>
  <Route path='/Furniture-web/Checkout'element={<Checkout/>}></Route>
  <Route path='/Furniture-web/Contact' element={<Contact/>}/>
  <Route path='/Furniture-web/Blog' element={<Blog/>}/>
</Routes>
{/* <Cart/> */}
{/* <Product_Comparison/> */}
{/* <Page2></Page2> */}
{/* <Hero></Hero> */}
{/* <Checkout/> */}
{/* <Contact/> */}
{/* <Blog/> */}
<Footer/>
</>
  )
}

export default App
