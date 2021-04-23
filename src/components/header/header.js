import React from 'react';
import './header.css';
import logo from '../../images/Academic Cloud Logo.png';
import {Link} from 'react-router-dom';

function Header(props) {
    return (
        <header className='header'>
            <div className='header_main'>
                <div className='header_logo'>
                    <a href='/'>
                        <img src={logo} alt='DAC Logo'/>
                    </a>
                </div>
                <nav id='header_nav'>
                        <div className='main_menu'>
                            <ul className='menu'>
                                <li>
                                    <Link to='/about'>About</Link>
                                </li>
                                <li>
                                    <a href='https://vctr01.senglab2.ad.net' target='_blank' rel='noreferrer'>vCenter</a>
                                </li>
                                <li>
                                    <a href='https://vra01.senglab2.ad.net' target='_blank' rel='noreferrer'>vRealize Automation</a>
                                </li>
                                <li>
                                    <a href='https://vraidm.senglab2.ad.net' target='_blank' rel='noreferrer'>vRealize IDM</a>
                                </li>
                                <li>
                                    <Link to='/ad-request'>AD Request</Link> 
                                </li>
                            </ul>
                        </div>
                    <div className='nav_utility'>
                        <ul className='menu'>
                            <li>
                                <a href='http://www.dunwoody.edu' target='_blank' rel='noreferrer'>Dunwoody.edu</a>
                            </li>
                            <li>
                                <a href='/'>Sign In</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;