import Image from "next/image"


const cources =()=>{
    const scrollToTop = () =>{
        window.scroll({
          top:0,
          behavior: "smooth",
        })
      }
    return(
    <div className="cources">
        <h2>For Adults</h2>
        <div className="container">
        <div className="left">
            <Image src={require("../public/demo/cources13.png")}/>
        </div>
        <div className="right">
            <h3 className="courcesTitle" dir="rtl">ورشة المكرمية الخاصة بالاكسسوارات</h3>
            <p> فن المكرمية <mark>هو فن ربط الحبال في عُقد لتشكيل قطع مفيدة وهو فن قديم استخدمه النساجون العرب وترجع اصوله الى الحضارتين البابليه والاشورية<br/></mark> 
مستوى الورشة : مبتدئ ( لا يحتاج الى خبرة او معرفة مسبقه) <br/>
المدة : 3 ساعات <br/>
العمر : 15 سنه فما فوق <br/>
:محاور الورشة<br/> 
تعريف فن المكرمية واستخداماته- <br/>
تعريف المواد والادوات المستخدمة فيه- <br/>
شرح نوعين من العقد المستخدمة في فن المكرميه- <br/>
تطبيق عملي للعقد عن طريق عمل الاكسسوارات المختلفه- <br/>
عمل قطعه اكسسوار كمشروع نهائي- </p> 
        </div>
        </div>
        <div className="container">
        <div className="left">
            <Image src={require("../public/demo/cources14.png")}/>
        </div>
        <div className="right">
            <h3 className="courcesTitle">ورشة المكرمية الخاصة بحاملات السنادين</h3>
            <p> فن المكرمية <mark >هو فن ربط الحبال في عُقد لتشكيل قطع مفيدة وهو فن قديم استخدمه النساجون العرب وترجع اصوله الى الحضارتين البابليه والاشورية<br/></mark> 
            مستوى الورشة : مبتدئ ( يحتاج الى معرفه بسيطة ) <br/>
المدة : 3 ساعات <br/>
العمر : 15 سنه فما فوق <br/>
:محاور الورشة<br/> 
تعريف فن المكرمية واستخداماته- <br/>
تعريف المواد والادوات المستخدمة فيه- <br/>
شرح ثلاث انواع من العقد المستخدمة في فن المكرميه - <br/>
تطبيق عملي للعقد عن طريق عمل حاملات السنادين - <br/>
عمل قطعه من حاملات السنادين كمشروع نهائي- </p> 
        </div>
        </div>
        <h2>For Kids</h2>
        <div className="container">
        <div className="left">
            <Image src={require("../public/demo/cources15.png")}/>
        </div>
        <div className="right">
            <h3 className="courcesTitle">ورشة البوم بوم </h3>
            <p>البوم بوم <mark>هي كرات مصنوعه من الخيوط يمكن استخدامها في عمل الكثير من الاكسسوارات والشخصيات المناسبه للاطفال</mark> <br/>
            :صممت هذه الورشة لتعليم الاطفال<br/>
            قيمة الاعمال اليدوي-<br/>
            وتوسيع مخيلتهم وانتاجيتهم بجعلهم يصنعون العابهم بانفسهم-</p>
        </div>
        </div>
        <div className='backTopBtn'>
      <button className='scrollToTop'  onClick={scrollToTop}><span><Image src={require("../public/icons/backTop.png")} className="d-block w-100" alt="Back To Top"/></span></button>
     </div>
    </div>
    )
}

export default cources