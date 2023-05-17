import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo1.png"

const Header = () => {
    return (
        <div className="navbar bg-base-100 items-center mb-3 z-10 bg-transparent">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box">
                        <li><Link>News</Link></li>
                        <li><Link>Destination</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>Contact</Link></li>
                        <li>
                            <Link to="/login">
                                <button className="btn btn-warning w-32">Login</button>
                            </Link>
                        </li>
                        <div className="">
                            <input type="text" className='border-2 p-3 rounded-md outline-none' placeholder='Search Your Destination' />
                        </div>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl z-10">
                    <img src={logo} className='h-full filter invert brightness-100' alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex w-1/3">
                <input type="text" className='border-2 p-3 rounded-md w-4/ z-10 outline-none' placeholder='Search Your Destination' />
            </div>
            <div className="navbar-end hidden lg:flex text-white">
                <ul className="menu menu-horizontal px-1">
                    <li><Link>News</Link></li>
                    <li><Link>Destination</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>Contact</Link></li>
                    <li>
                        <Link to="/login">
                            <button className="btn btn-warning w-32">Login</button>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Header;