import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routes from '../../routes/Routers'

import AdminNav from '../../admin/AdminNav'
import { useLocation } from 'react-router-dom'
const Layout = () => {

  const location = useLocation()
  return ( 
  <>
  {
    location.pathname.startsWith('/dashboard') ? <AdminNav/>  :  <Header/>
  }
  <div><Routes/></div>
  <Footer/>
  </>
  );
};

export default Layout