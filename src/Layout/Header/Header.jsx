import React, { useEffect, useState } from "react";
import "./header.css";
import Logo from "../../assets/entesk.png";
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
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#demo">Demo</a>
              </li>
              {/* <li>
                <a href="#inner">Inner Pages</a>
              </li> */}
              <li>
                <a href="#support">Support</a>
              </li>
              <li>
                <a href="#feature">Feature</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-mobile-container">
            <h2>Techno</h2>
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
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#demo">Demo</a>
              </li>
              {/* <li>
                <a href="#inner">Inner Pages</a>
              </li> */}
              <li>
                <a href="#support">Support</a>
              </li>
              <li>
                <a href="#feature">Feature</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
            </nav>
}
    </>
  );
};

export default Header;
