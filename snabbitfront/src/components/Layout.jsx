import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout({useremail,setIsLogin}) {
  return (
    <div>
      <header>
        <Header useremail={useremail} setIsLogin={setIsLogin}/>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default Layout;