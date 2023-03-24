import React from 'react';
import Nav from './Nav';
import Services from './Services';
import About from './About';
import Blog from './Blog';
import Client from './Client';
import Contact from './Contact';
import Copyright from './Copyright';
import Footer from './Footer';
import Newslater from './Newslater';



function App() {
  return (
    <div className='App'>
              <Nav/>
      <Services/>
      <About/>
      <Blog/>
      <Client/>
      <Newslater/>
      <Contact/>
      <Footer/>
      <Copyright/>

    </div>
  );
}

export default App;
