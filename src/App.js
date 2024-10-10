import './App.css';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shope from './pages/Shope';
import ShopeCatagory from './pages/ShopeCatagory';
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './component/Footer/Footer';
import men_banner from './component/assets/banner_mens.png'
import women_banner from './component/assets/banner_women.png'
import kid_banner from './component/assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shope/>}/>
        <Route path='/mens' element={<ShopeCatagory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopeCatagory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopeCatagory banner={kid_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
           <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
