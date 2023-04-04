import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Men from './components/Men'
import Women from './components/Women'
import Navbar from './components/Navbar';
import Propage from './components/Propage';
import Electronics from './components/Electronics';
import Jewellery from './components/Jewellery';
import Footer from './components/Footer';
import Cart from './components/Cart';
function App() {
  return (
    <div className="">
        <Navbar/>
        <Routes>
                <Route path='/' element ={<Home/>} />
                <Route path='/men' element ={<Men />}/>
                <Route path='/women' element ={<Women/>}/>
                <Route path='/electronics' element={<Electronics/>} />
                <Route path='/jewellery' element={<Jewellery/>}  />
                <Route path='products/:id' element={<Propage />}/>
                <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
