import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='footer-wrapper'>
                    <div className='footer-left'>
                        <div className='footer-motto'>
                            <Link to="/" className="footer-logo">
                                <i className="fa-sharp fa-solid fa-bars"/>
                            </Link> 
                            <p>Lets change your habit<br/>join with million people</p>
                        </div>
                        <div className='footer-company'>
                            <span className='footer-companyname'>DK Tech Company</span><br/>
                            <span className='footer-companyaddress'>Uma Street, Lost City, Aincard</span>
                        </div>
                    </div>
                    <div className='footer-right'>
                        <ul className='footer-features'>
                            <li className='footer-features-caption'>Features</li>
                            <li>Lorem</li>
                            <li>Ipsum</li>
                            <li>Sit</li>
                            <li>Dolor</li>
                        </ul>
                        <ul className='footer-pricing'>
                            <li className='footer-pricing-caption'>Pricing</li>
                            <li>Lorem</li>
                            <li>Ipsum</li>
                            <li>Sit</li>
                            <li>Dolor</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer