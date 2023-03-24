import React from 'react'

const Client = () => {
  return (

<>
      <div className="client_section layout_padding">
         <div id="main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <h1 className="client_taital">Testimonial</h1>
                     <div className="client_section_2">
                        <div className="client_left">
                           <div><img src="images/wafaa.jpg" className="client_img"/></div>
                        </div>
                        <div className="client_right">
                           <h3 className="client_name">Wafaa-Elkazragy</h3>
                           <p className="client_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <h1 className="client_taital">Testimonial</h1>
                     <div className="client_section_2">
                        <div className="client_left">
                           <div><img src="images/wafaa.jpg" className="client_img"/></div>
                        </div>
                        <div className="client_right">
                           <h3 className="client_name">Wafaa-Elkazragy</h3>
                           <p className="client_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <h1 className="client_taital">Testimonial</h1>
                     <div className="client_section_2">
                        <div className="client_left">
                           <div><img src="images/wafaa.jpg" className="client_img"/></div>
                        </div>
                        <div className="client_right">
                           <h3 className="client_name">Wafaa-Elkazragy</h3>
                           <p className="client_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
             <i className="fa fa-angle-left"></i>
            </a>
            <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
             <i className="fa fa-angle-right" style={{fontSize:"24px"}}></i>
            </a>
         </div>
      </div>

</>
    )
}

export default Client