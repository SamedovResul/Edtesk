import React from 'react'
import "./footer.css"
import Logo from "../../assets/entesk.png";
const Footer = () => {
    const date = new Date()
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer-container">
                <div className="footer-header">
                    <h2>
                    <img src={Logo} alt="" />
                    </h2>
                    <h4>
                    contact@entesk.com
                    </h4>
                </div>
                <div className="footer-nav">
                    <p>
                    © Copyright {date.getFullYear()} Enteskgroup All rights reserved.
                    </p>
                    <nav>
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
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer