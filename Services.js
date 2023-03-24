import React from 'react'

const Services = () => {
  return (
    <>
      <div className="services_section layout_padding">
         <div className="container">
            <h1 className="services_taital"><span style={{color: "#fcce2d"}}>Our</span> Courses</h1>
            <div className="services_section_2">
               <div className="row">
                  <div className="col-md-6">
                     <div className="image_main">
                        <img src="images/img-2.png" className="image_8" style={{width:"100%"}}/>
                        <div className="text_main">
                           <div className="seemore_text">قرأن كريم</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="image_main">
                        <img src="images/img-3.png" className="image_8" style={{width:"100%"}}/>
                        <div className="text_main">
                           <div className="seemore_text">لغه عربيه</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-6">
                     <div className="image_main">
                        <img src="images/img-4.png" className="image_8" style={{width:"100%"}}/>
                        <div className="text_main">
                           <div className="seemore_text">تجويد وعلوم شرعيه</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="image_main">
                        <img src="images/img-5.png" className="image_8" style={{width:"100%"}}/>
                        <div className="text_main">
                           <div className="seemore_text">لغه تركيه</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>            
      </div>
    </>

    )
}

export default Services