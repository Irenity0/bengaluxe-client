import { Link, NavLink } from "react-router-dom";
import { Tooltip } from 'react-tooltip';
import { BiHome } from "react-icons/bi";

const Navbar = () => {

    const avatarURL = "https://i.pinimg.com/236x/de/6f/ef/de6fef47290c1e0f620ab161c66d9abd.jpg";
    const displayname = "Oikawa";
    const email = 'oikawa@gmail.com'
    const user = null;

    const navOptions = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/community"}>Community</NavLink></li>
        <li><NavLink to={"/blogs"}>Blogs</NavLink></li>
        <li><NavLink to={"/aboutUs"}>About Us</NavLink></li>
        <li><NavLink to={"/contactUs"}>Contact Us</NavLink></li>
    </>
    
    

    return (
        <div className="bg-base-200 w-full fixed z-10">
    <div className="navbar w-11/12 mx-auto font-raleway text-primary">
        <div className="navbar-start">
            <div className="dropdown">
                <button tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </button>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content z-10 bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                    {navOptions}
                </ul>
            </div>
            <div className="flex justify-between items-center flex-row">
                <BiHome className="h-6 w-6"/>
                <Link to={"/"} className="btn btn-ghost text-2xl font-bold text-primary hover:bg-neutral">Bengaluxe</Link>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu space-x-2 menu-horizontal px-1">
                {navOptions}              
            </ul>
        </div>
        <div className="navbar-end hidden md:flex space-x-4 items-center">
            {!user ? (
                <>
                    <NavLink to={"/login"}>Log in</NavLink>
                    <NavLink to={"/register"}>Register</NavLink>
                </>
            ) : (
                <>
                    {/* Avatar dropdown */}
                    <div className="avatar dropdown">
                        <button tabIndex={0} className="w-14 h-14 rounded-full">
                            <img className="rounded-full" src={avatarURL} alt={displayname} />
                        </button>
                        {/* Dropdown content */}
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[99] w-52 p-2 shadow">
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/announcements">Offer Announcments</Link></li>
                            <li className="px-4 py-1 underline">{displayname}</li>
                            <li className="px-4 py-1 underline">{email}</li>
                        </ul>
                    </div>
                    <button className="mr-4 btn border-2 border-primary text-primary hover:bg-neutral hover:border-primary">Log out</button>
                </>
            )}
            <Tooltip id="my-tooltip" />
        </div>
    </div>
</div>

    );
};

export default Navbar;