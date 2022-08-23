import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './components/Signin';


function App() {
  return (

    <div className="App">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/checkout-page" element={<CheckoutPage/>} />
         <Route path="/" element={<Products/>} />
         <Route path="/*" element={<div>not found , 404</div>} />
        </Routes>
      </BrowserRouter>

      

    </div>

  );
}

export default App;
