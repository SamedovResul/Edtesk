import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer-container">
                <div className="footer-header">
                    <h2>
                    What are you waiting for?
                    </h2>
                    <h4>
                    Get your copy of Techno now!
                    </h4>
                    <button className='buy-now'>
                        Buy The Techno Now
                    </button>
                </div>
                <div className="footer-nav">
                    <p>
                    © Copyright 2023 Dream-IT. All rights reserved.
                    </p>
                    <nav>
                        <ul>
                            <li>
                                <a href="about">About</a>
                            </li>
                            <li>
                                <a href="service">Service</a>
                            </li>
                            <li>
                                <a href="support">Support</a>
                            </li>
                            <li>
                                <a href="contact">About</a>
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