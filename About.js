import React from 'react'

const about = () => {
  return (

<>
      <div className="news_section layout_padding">
         <div className="container">
            <h1 className="news_taital">هدف الموقع</h1>
            <p className="news_text" dir='rtl'>هدف الموقع
نهدف في موقعنا إلى تقديم دروس مجانية بشكل بسيط و مبسط لكل من يريد تعلم اللغة التركية.
دروسنا عبارة عن مقالات و مشاركات مختارة
 و مزيد من المحتوي المفيد وتعلم اللغه العربيه والعلوم الشرعيه والقرأن بأحكامه التجويدية..</p>
            <div className="news_section_2">
               <div className="row">
                  <div className="col-md-6">
                     <div className="news_taital_box">
                        <p className="date_text">01 Jan 2020</p>
                        <h4 className="make_text">نشاط عملي</h4>
                        <p className="lorem_text">تعلم اللغة التركية من خلال بوابة تعلم اللغة التركية عن بُعد</p>
                        <p className="post_text">Post By :Al-Mohafzeen</p>
                     </div>
                  </div>
                  <div className="col-md-6">
                  
                   
                      <iframe   className="image_6" style={{width:"100%"}}  height="480" width="500"
               src="https://www.youtube.com/embed/vBb9LRrbboM">
                        </iframe>

                     
                     <h6 className="plus_text">+</h6>
                  </div>
               </div>
            </div>
         </div>
      </div>

</>    )
}

export default about