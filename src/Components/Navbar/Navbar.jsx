import React from 'react';


const Navbar = () => {

    const manuItems = <React.Fragment>
        <li><a href='/'>Home</a></li>
        <li><a href='/'>About</a></li>
        <li><a href='/'>Blogs</a></li>
        <li><a href='/'>Dashboard</a></li>
        <li><a href='/'>Log Out</a></li>
        <li><a href='/'>SignUp</a></li>
        <li><a href='/'>Login</a></li>
        <div className="form-control mt-2">
            <label className="label cursor-pointer">
            </label>
        </div>
    </React.Fragment >
    return (
        <div>
            <div className="navbar bg-base-100 flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {manuItems}
                        </ul>
                    </div>
                    <a to='/' className="btn btn-ghost text-xl uppercase">Makbo Seats</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {manuItems}
                    </ul>
                </div>

               


            </div>
        </div>
    );
};

export default Navbar;