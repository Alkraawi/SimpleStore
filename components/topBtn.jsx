import Image from "next/image";

const topBtn = ()=>{
    const scrollToTop = () =>{
        window.scroll({
          top:0,
          behavior: "smooth",
        });
    }
    return(
            <div className='backTopBtn'>
      <button className='scrollToTop'  onClick={scrollToTop}><span><Image src={require("../public/icons/backTop.png")}  alt="Back To Top"/></span></button>
     </div>
        
    )
}
export default topBtn