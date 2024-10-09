import './App.css';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shope from './pages/Shope';
import ShopeCatagory from './pages/ShopeCatagory';
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shope/>}/>
        <Route path='/mens' element={<ShopeCatagory/>} catagory="mens"/>
        <Route path='/womens' element={<ShopeCatagory/>} catagory="womens"/>
        <Route path='/kids' element={<ShopeCatagory/>} catagory="kids"/>
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
