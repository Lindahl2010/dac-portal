import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='header_main'>
                <div className='header_logo'>
                    <h5 style={{marginBottom:'0px'}}>Dunwoody <br/> Academic <br/> Cloud</h5>
                </div>
                <nav id='header_nav'>
                    <div className='main_menu'>
                        <ul className='menu'>
                            <li>
                                <a href='/'>About</a>
                            </li>
                            <li>
                                <a href='/'>oVirt Admin</a>
                            </li>
                            <li>
                                <a href='/'>VM Portal</a>
                            </li>
                        </ul>
                    </div>
                    <div className='nav_utility'>
                        <ul className='menu'>
                            <li>
                                <a href='/'>Dunwoody.edu</a>
                            </li>
                            <li>
                                <a href='/'>Sign In</a>
                            </li>
                            <li>
                                <a href='/'>Search</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                
            </div>
        </header>
    )
}

export default Header;