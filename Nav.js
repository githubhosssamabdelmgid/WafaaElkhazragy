import React from 'react'

const Nav = () => {
  return (
   <>
      <div className="header_section">
         <div className="header_bg">
            <div className="container">
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <a className="logo" href="index.html"><h1>WA<span>FAA</span></h1></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                           <a className="nav-link" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="about.html">About</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="services.html">Services</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="blog.html">Blog</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="contact.html">Contact Us</a>
                        </li>
                     </ul>
                     <div className="call_section">
                        <ul>
                           <li><a href="#"><img src="images/fb-icon.png"/></a></li>
                           <li><a href="#"><img src="images/twitter-icon.png"/></a></li>
                           <li><a href="#"><img src="images/linkedin-icon.png"/></a></li>
                           <li><a href="#"><img src="images/instagram-icon.png"/></a></li>
                           <div className="donate_bt"><a href="#"><img src="images/search-icon.png"/></a></div>
                        </ul>
                     </div>
                  </div>
               </nav>
            </div>
         </div>
      <div className="banner_section layout_padding">
         <div id="my_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <div className="banner_taital_main">
                        <div className="row">
                           <div className="col-md-6">
                              <h1 className="banner_taital">Wafaa ELkhazragy</h1>
                              <p className="banner_text">معلمة  قرأن  كريم وتجويد ولغه عربيه ولغه تركيه<br/>(Kur'an-ı Kerim, Tecvid, Arapça ve Türkçe öğretmeni) </p>
                              <div className="btn_main">
                                 <div className="about_bt active"><a href="#">About Us</a></div>
                                 <div className="quote_bt"><a href="#">Get A Quote</a></div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="image_1"><img src="images/wafaa.jpg"/></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="banner_taital_main">
                        <div className="row">
                           <div className="col-md-6">
                           <h1 className="banner_taital">Wafaa ELkhazragy</h1>
                           <p className="banner_text">معلمة  قرأن  كريم وتجويد ولغه عربيه ولغه تركيه </p>
                              <div className="btn_main">
                                 <div className="about_bt active"><a href="#">About Us</a></div>
                                 <div className="quote_bt"><a href="#">Get A Quote</a></div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="image_1"><img src="images/wafaa.jpg"/></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="banner_taital_main">
                        <div className="row">
                           <div className="col-md-6">
                              <h1 className="banner_taital">Wafaa ELkhazragy</h1>
                              <p className="banner_text">معلمة  قرأن  كريم وتجويد ولغه عربيه ولغه تركيه </p>
                              <div className="btn_main">
                                 <div className="about_bt active"><a href="#">About Us</a></div>
                                 <div className="quote_bt"><a href="#">Get A Quote</a></div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="image_1"><img src="images/wafaa.jpg"/></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
            <i className="fa fa-arrow-left" style={{fontSize:"24px"}}></i>
            </a>
            <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
            <i className="fa fa-arrow-right" style={{fontSize:"24px"}}></i>
            </a>
         </div>
      </div>
      </div>

   </>
   )
}

export default Nav