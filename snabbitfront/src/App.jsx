import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Service from './Page/Service';
import Cart from './Page/Cart';
import Home from './Page/Home';
import Aboutus from './Page/Aboutus';
import Contactus from './Page/Contactus';
import Login from './Login';
import Admin from './Page/Admin';
import React, { useEffect, useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [useremail, setUserEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    setIsAdmin(useremail === "admin@gmail.com");
  }, [useremail]);

  return (
    <>
      {isLogin ? (
        isAdmin ? (
          <Admin/>
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout useremail={useremail} setIsLogin={setIsLogin} />}>
                <Route index element={<Home />} />
                <Route path="Service" element={<Service/>} />
                <Route path="Aboutus" element={<Aboutus />} />
                <Route path="Contactus" element={<Contactus />} />
                <Route path="Cart" element={<Cart useremail={useremail}/>} />
                <Route path="*" element={<div className='align-items-center text-center fs-1'>Page Not Found</div>} />
              </Route>
            </Routes>
          </BrowserRouter>
        )
      ) : (
        <Login setIsLogin={setIsLogin} setUserEmail={setUserEmail} />
      )}
    </>
  );
}

export default App;
