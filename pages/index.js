import {Head, Script} from 'next/head'
import Image from 'next/image'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngry, faBatteryEmpty, faCoffee} from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'




const Home = ()=> {
const scrollToTop = () =>{
  window.scroll({
    top:0,
    behavior: "smooth",
  })
}
  return (
    <div >
      
                      {/*Hero section*/}
      <section className="hero">
        <div className='container'>
      <div className='heroleft'>
        <h1 className='heroTitle'>
          Simple Store
        </h1>
        <p className='heroPargraph'>It is a simple shop that offers handmade accessories and courses on how to make them</p>
        <ul className='herobtns'>
          <li><Link href='/Product' className='btn'>Shope Now</Link> </li>
          <li><Link href='/cources' className='btn'>Courses</Link> </li>

        </ul>
      </div>
      <div className='heroRight'>
        <Image src={require("../public/logo/simplelogo_7.gif")}/>
      </div>
      </div>
      </section>
                    {/*ours section*/}
      <section className='Oursection'>
        <h3 className='sectionTitle'>Our Partners</h3>
        <ul className='ourspartners'>
          <li><a href='#'>Iotmaker</a></li>
          <li><a href='#'>Iotkids</a></li>

        </ul>
      </section>
                      {/*product section*/}
      <section className='productSection'>
        <h3 className='sectionTitle' >Product</h3>
        <div className='container'>          {/* card one */}
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
                <a href="https://www.instagram.com/direct/t/340282366841710300949128214014532408783">للطلب</a>
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
          </div>
          <Link href='/Product'>
          <a  className='moreBtn'>More Product</a>
          </Link>
      </section>
                  {/*cources section*/}
      <section className='cources'>
      <h3 className='sectionTitle'>Courses</h3>

        <div className='container'>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>

  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src={require("../public/demo/cources1.png")} className="d-block w-100" alt="Cources"/>
    </div>
    <div className="carousel-item">
      <Image src={require("../public/demo/cources2.png")} className="d-block w-100" alt="Cources"/>
    </div>
    <div className="carousel-item">
      <Image src={require("../public/demo/cources3.png")} className="d-block w-100" alt="Cources"/>
    </div>
    <div className="carousel-item">
      <Image src={require("../public/demo/cources4.png")} className="d-block w-100" alt="Cources"/>
    </div>
    <div className="carousel-item">
      <Image src={require("../public/demo/cources5.png")} className="d-block w-100" alt="Cources"/>
    </div>
    <div className="carousel-item">
      <Image src={require("../public/demo/cources6.png")} className="d-block w-100" alt="Cources"/>
    </div>
    <div className="carousel-item">
      <Image src={require("../public/demo/cources7.png")} className="d-block w-100" alt="Cources"/>
    </div>
    <div className="carousel-item">
      <Image src={require("../public/demo/cources8.png")} className="d-block w-100" alt="Cources"/>
    </div>
    <div className="carousel-item">
      <Image src={require("../public/demo/cources9.png")} className="d-block w-100" alt="Cources"/>
    </div>
    <div className="carousel-item">
      <Image src={require("../public/demo/cources10.png")} className="d-block w-100" alt="Cources"/>
    </div>
    <div className="carousel-item">
      <Image src={require("../public/demo/cources11.png")} className="d-block w-100" alt="Cources"/>
    </div>
    <div className="carousel-item">
      <Image src={require("../public/demo/cources12.png")} className="d-block w-100" alt="Cources"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>
</div>   
        <div className='moreBtn'>
        <Link href="/cources" >Cources Detals</Link>
        </div>
      </section>

     <div className='backTopBtn'>
      <button className='scrollToTop'  onClick={scrollToTop}><span><Image src={require("../public/icons/backTop.png")} className="d-block w-100" alt="Back To Top"/></span></button>
     </div>
    </div>
      


  
  )
}
export default Home
