import React from 'react'

const Blog = () => {
  return (
<>
      <div className="blog_section layout_padding">
         <div className="container">
            <h1 className="news_taital">معلومات عنا</h1>
            <p className="news_text">مزيد من المعلومات حول مؤهلاتنا</p>
            <div className="blog_section_2">
               <div className="row">
                  <div className="col-md-6">
                     <img src="images/wafaa.jpg" className="image_7" style={{width:"100%"}}/>
                  </div>
                  <div className="col-md-6">
                     <h4 className="classNamees_text">:الشهادات التي حصلنا عليها</h4>
                     <p className="ipsum_text">حاصله على شهادة المستوى الخامس في اللغه التركيه من جامعة صباح الدين زعيم 
                        حاصلة على شهادة لكلية رياض الأطفال                        
                        حاصلة على شهادة تعليم اللغه العربيه لغير الناطقين بها 
                        حاصلة على شهادة نور الدين زنكي في العلوم المقدسية 
                        خبرة ٣ سنوات في التدريس اللغه العربيه للأطفال الأتراك و غير العرب و العرب  
                        عملت في الترجمة و التصحيح لسيناريوهات الافلام و المسلسلات من التركيه للعربيه و العكس
                        <br/>
                        <br/>
                        Aldığımız sertifikalar:
Sabah al-Din Zaim Üniversitesi'nden Türkçe beşinci seviye sertifikasına, Anaokulu Koleji sertifikasına, Anadili olmayanlara Arapça öğretimi sertifikasına, Nour al-Din Zanki Sertifikasına sahiptir. Kudüs Bilimleri Türk ve Arap olmayan çocuklara Arapça öğretiminde 3 
yıllık deneyim ve Al-Arab, film ve dizilerin senaryolarını Türkçeden Arapçaya ve tersi yönde çevirme ve düzeltmede çalıştı.
                        </p>
                  </div>
               </div>
            </div>
            <div className="read_bt"><a href="#">أقرأ المزيد</a></div>
         </div>
      </div>

</>

    )
}

export default Blog