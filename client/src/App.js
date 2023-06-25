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
import Signup from './components/Signup';
import Login from './components/Login';

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
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />

        </Routes>
        <Footer />
    </div>
  );
}

export default App;
