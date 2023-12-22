import React from 'react'
import "./footer.css"

const Footer = () => {
    const date = new Date()
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer-container">
                <div className="footer-header">
                    <h2>
                    Enteskgroup
                    </h2>
                    <h4>
                    contact@enteskedu.com
                    </h4>
                </div>
                <div className="footer-nav">
                    <p>
                    © Copyright {date.getFullYear()} Enteskgroup All rights reserved.
                    </p>
                    <nav>
                        <ul>
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#demo">Demo</a>
                            </li>
                            <li>
                                <a href="#support">Support</a>
                            </li>
                            <li>
                                <a href="#feature">Feature</a>
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