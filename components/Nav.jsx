import Link from "next/link";
import Image from "next/image";
const Nav = () => {
return (
    <div>
    <div className="Nav bg-light">
    <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="mobile-nav">
        <Link className="navbar-brand" href="/">
        <span className="logo">
            <Image
            src={require("../public/logo/simplelogo_6.gif")}
            alt="SimpleStore"
            />
        </span>
        </Link>
        </div>
        <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav {/*mr-auto*/}">
            <li className="nav-item active">
            <Link href='/' >
                <a className="nav-link">
                Home <span className="sr-only">(current)</span>
                </a>
            </Link>
            </li>
            <li className="nav-item">
            <Link  href="/Product">
                <a className="nav-link">
                Products
                </a>
            </Link>
            </li>
            <li className="nav-item">
            <Link  href="/cources">
                <a className="nav-link">
                Courses
                </a>
            </Link>
            </li>
            <li className="nav-item dropdown">
            <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
            >
                Countuct Us
              </a>
              <div className="dropdown-menu">
                <Link  href="https://www.instagram.com/simpl8e/?igshid=YmMyMTA2M2Y%3D">
                    <a className="dropdown-item">
                  Instagram
                  </a>
                </Link>
                <Link href="https://www.facebook.com/Simpl8">
                <a className="dropdown-item" >
                  Facebook
                </a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
        </div>
      </nav>
      
      </div>
    </div>
  );
};

export default Nav;
