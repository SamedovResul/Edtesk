import React, { useEffect, useState } from "react";
import "./header.css";
import Logo from "../../assets/enteskgrouplogo.png";
import ScrollLogo from "../../assets/scroll-logo.png"
import MenuIcon from "../../assets/Menu Icon.svg"
import CloseIcon from "../../assets/x-close.svg"

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [openMenu,setOpenMenu] = useState(false)

  const changeHederColor = () => {
    if (window.scrollY > 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeHederColor);
    return () => {
      window.removeEventListener("scroll", changeHederColor);
    };
  }, []);
  return (
    <>
    <div className='header'>
      <div className="container">
        <div className="header-container">
          <div className="header-icon">
            {scroll ? 
            <img src={Logo} alt="logo" />
            :
            <img src={Logo} alt="logo" />
            }
          </div>
          <nav className="navbar-list">
            <ul>
              <li>
                <a href="#home">Əsas</a>
              </li>
              <li>
                <a href="#demo"> Portfolio </a>
              </li>
              {/* <li>
                <a href="#inner">Inner Pages</a>
              </li> */}
              <li>
                <a href="#support"> Haqqımızda </a>
              </li>
              <li>
                <a href="#feature">Xidmətlər</a>
              </li>
              <li>
                <a href="#blog">Əlaqə</a>
              </li>
            </ul>
          </nav>
          <div className="contact" >
              <p> +994 55 660 91 55 </p>
          </div>
        </div>
        <div className="header-mobile-container">
          <div className="header-icon">
            <img src={Logo} alt="logo" />
          </div>
            <div className="menu-icon" onClick={()=>setOpenMenu(!openMenu)} >
              {openMenu ?
              <img src={CloseIcon} alt="/" />
              :
              <img src={MenuIcon} alt="/" />

              }
            </div>
           
        </div>
      </div>

    </div>
    {openMenu &&
        <nav className="navbar-mobile">
            <ul>
              <li>
                <a href="#home">Əsas</a>
              </li>
              <li>
                <a href="#demo"> Portfolio </a>
              </li>
              {/* <li>
                <a href="#inner">Inner Pages</a>
              </li> */}
              <li>
                <a href="#support"> Haqqımızda </a>
              </li>
              <li>
                <a href="#feature">Xidmətlər</a>
              </li>
              <li>
                <a href="#blog">Əlaqə</a>
              </li>
            </ul>
            </nav>
}
    </>
  );
};

export default Header;
