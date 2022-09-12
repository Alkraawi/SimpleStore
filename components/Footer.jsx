import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngry, faBatteryEmpty, faCoffee,faFcaeb } from "@fortawesome/free-solid-svg-icons";

  import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
const Footer =()=> {
return(

<div className="footer ">
    <div className="contaner">
    <div className='left'>
        <div className="footerLogo">
        <Link href="/">
        <Image src={require("../public/logo/simplelogo_3.gif")} alt="SimpleStore"/>
        </Link>
        </div>
        <div className="copyright">
            <p>Copyright 2022. Created by Project1</p>
        </div>
    </div>
    <div className='right'>
        <ul>
            <li><a href="https://www.facebook.com/Simpl8" ><FontAwesomeIcon className='fa-brands' icon={faFacebook}/></a></li>
            <li><a href="https://www.instagram.com/simpl8e/?igshid=YmMyMTA2M2Y%3D"><FontAwesomeIcon icon={faInstagram} className='fa-brands'/></a></li>
        </ul>
    </div>
    </div>
</div> 
)
}

export default Footer