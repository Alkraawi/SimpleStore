import Image from "next/image";

const product = () => {
  const scrollToTop = () =>{
    window.scroll({
      top:0,
      behavior: "smooth",
    })
  }
return (
    <>
    <div className="product">
      <div className="productSection">
        <h3 className="sectionTitle" >Product</h3>
        <div className="container">
          {/* card one */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <Image
                  src={require("../public/demo/prodect1.gif")}
                  className="img1"
                ></Image>
                <div className="detals">
                  <h6>4000 IQD </h6>
                  <h6>سوار رموز االابراج</h6>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                يدوي الصنع <br/>
                نسائي – رجالي <br/>
                متوفر لجميع االبراج         
                </p>
                <a href="https://www.instagram.com/direct/t/340282366841710300949128214014532408783" > للطلب</a>
              </div>
            </div>
          </div>
          {/* card tow */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <Image src={require("../public/demo/prodect2.gif")}></Image>
                <div className="detals">
                  <h6>4000 IQD</h6>
                  <h6>سوار</h6>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  يدوي الصنع <br/>
                  نسائي - رجالي
                </p>
                <a href="https://www.instagram.com/direct/t/340282366841710300949128214014532408783">للطلب</a>
              </div>
            </div>
          </div>
          {/* card three */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <Image src={require("../public/demo/prodect3.gif")}></Image>
                <div className="detals">
                <h6>3000 IQD</h6>
                  <h6>سوار</h6>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
              <p>
                  يدوي الصنع <br/>
                  نسائي - رجالي
                </p>
                <a href="https://www.instagram.com/direct/t/340282366841710300949128214014532408783">للطلب</a>
              </div>
            </div>
          </div>
          {/* card four */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <Image src={require("../public/demo/prodect4.gif")}></Image>
                <div className="detals">
                  <h6>7000 IQD </h6>
                  <h6>تراجي </h6>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                يدوية الصنع
                </p>
                <a href="https://www.instagram.com/direct/t/340282366841710300949128214014532408783">للطلب</a>
              </div>
            </div>
          </div>
          {/* card five */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <Image src={require("../public/demo/prodect5.gif")}></Image>
                <div className="detals">
                <h6>7000 IQD </h6>
                  <h6>تراجي </h6>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
              <p>
                يدوية الصنع
                </p>
                <a href="https://www.instagram.com/direct/t/340282366841710300949128214014532408783">للطلب </a>
              </div>
            </div>
          </div>
          {/* card six */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="image">
                  <Image src={require("../public/demo/prodect6.gif")}></Image>
                </div>
                <div className="detals">
                  <h6>6000 IQD</h6>
                  <h6>سوار</h6>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                يدوي الصنع
                </p>
                <a href="https://www.instagram.com/direct/t/340282366841710300949128214014532408783">للطلب</a>
              </div>
            </div>
          </div>
          {/* card seven */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="image">
                  <Image src={require("../public/demo/prodect7.gif")}></Image>
                </div>
                <div className="detals">
                  <h6>5000 IQD</h6>
                  <h6>سوار</h6>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                سوار يدوي الصنع بالوان صيفية <br/>
متوفر باللون االصفر,االخضر,البرتقالي
والوردي
                </p>
                <a href="https://www.instagram.com/direct/t/340282366841710300949128214014532408783">للطلب</a>
              </div>
            </div>
          </div>
          {/* card eight */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="image">
                  <Image src={require("../public/demo/prodect8.gif")}></Image>
                </div>
                <div className="detals">
                  <h6>6000 IQD</h6>
                  <h6>سوار</h6>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                يدوي الصنع بتصميم مميز
                </p>
                <a href="https://www.instagram.com/direct/t/340282366841710300949128214014532408783">للطلب</a>
              </div>
            </div>
          </div>
          {/* card nine */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="image">
                  <Image src={require("../public/demo/prodect9.gif")}></Image>
                </div>
                <div className="detals">
                  <h6>5000 IQD</h6>
                  <h6>قلادة</h6>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                يدوية الصنع <br/>
                متوفر باللون :البنفسجي,النيلي,البرتقالي والوردي
                </p>
                <a href="https://www.instagram.com/direct/t/340282366841710300949128214014532408783">للطلب</a>
              </div>
            </div>
          </div>
          {/* card ten */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="image">
                  <Image src={require("../public/demo/prodect10.gif")}></Image>
                </div>
                <div className="detals">
                  <h6>5000 IQD</h6>
                  <h6>طوق شعر</h6>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                يدوي الصنع <br/>
                متوفر باللونين:االصفروالوردي
                </p>
                <a href="https://www.instagram.com/direct/t/340282366841710300949128214014532408783">للطلب</a>
              </div>
            </div>
          </div>
          {/* card eleven */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="image">
                  <Image src={require("../public/demo/prodect11.gif")}></Image>
                </div>
                <div className="detals">
                  <h6>5000 IQD </h6>
                  <h6>بوند شعر</h6>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                يدوي الصنع
                </p>
                <a href="https://www.instagram.com/direct/t/340282366841710300949128214014532408783">للطلب</a>
              </div>
            </div>
          </div>
          {/* card twelve */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="image">
                  <Image src={require("../public/demo/prodect12.gif")}></Image>
                </div>
                <div className="detals">
                  <h6>7000 IQD </h6>
                  <h6>تعليقة حائط</h6>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                يدوية الصنع <br/>
                بشكل ريشة 25*20<br/>
                متوفر باللون:الماروني,االخضروالوردي
                </p>
                <a href="#">للطلب اضغط هنا</a>
              </div>
            </div>
          </div>
          {/* card thirteen */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="image">
                  <Image src={require("../public/demo/prodect13.gif")}></Image>
                </div>
                <div className="detals">
                  <h6>1000 IQD</h6>
                  <h6>تعليقة حائط</h6>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                يدوية الصنع<br/>
                15cm القطر <br/>
                متوفرة باللونين:االصفروالسمائي
                </p>
                <a href="https://www.instagram.com/direct/t/340282366841710300949128214014532408783">للطلب</a>
              </div>
            </div>
          </div>
          {/* card forteen */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="image">
                  <Image src={require("../public/demo/prodect14.gif")}></Image>
                </div>
                <div className="detals">
                <h6>1000 IQD</h6>
                  <h6>تعليقة حائط</h6>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
              <p>
                يدوية الصنع<br/>
                15cm القطر <br/>
                متوفرة باللونين:االصفروالسمائي
                </p>
                <a href="https://www.instagram.com/direct/t/340282366841710300949128214014532408783">للطلب</a>
              </div>
            </div>
          </div>
          {/* card fifteen */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="image">
                  <Image src={require("../public/demo/prodect15.gif")}></Image>
                </div>
                <div className="detals">
                <h6>7000 IQD</h6>
                  <h6>تعليقة حائط</h6>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                يدوية الصنع<br/>
                10*8 cm بشكل كف <br/>
                </p>
                <a href="https://www.instagram.com/direct/t/340282366841710300949128214014532408783">للطلب</a>
              </div>
            </div>
          </div>
          {/* card sixteen */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="image">
                  <Image src={require("../public/demo/prodect16.gif")}></Image>
                </div>
                <div className="detals">
                  <h6>7000 IQD </h6>
                  <h6>حامل سنادين</h6>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                يدوي الصنع <br/>
                متوسط الحجم <br/>
                15cm قطر
                </p>
                <a href="https://www.instagram.com/direct/t/340282366841710300949128214014532408783">للطلب</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className='backTopBtn'>
      <button className='scrollToTop'  onClick={scrollToTop}><span><Image src={require("../public/icons/backTop.png")} className="d-block w-100" alt="Back To Top"/></span></button>
     </div>
    </div>
    </>
  );
};

export default product;
