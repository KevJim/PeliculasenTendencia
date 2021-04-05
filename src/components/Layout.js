import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout(props) {
  // const children = props.children;
  return (
    <>
      <Navbar></Navbar>
      {props.children}
      <Footer></Footer>
    </>
  );
}

export default Layout;
