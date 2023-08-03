import { Link } from "react-router-dom";

const Header = () => {

    const list = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/addTask">Add Tasks</Link></li>
        <li><Link to="/taskList">Task List</Link></li>
        <li><Link to="/about">About</Link></li>
    </>

    return (
        <div>
            <div className="navbar bg-sky-500  shadow-lg text-white rounded-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {list}
                        </ul>
                    </div>
                    <a className="normal-case lg:text-xl lg:font-bold px-6 py-2"><span>Mohite Consultancy</span> <br /><span>Services (MRS)</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base font-semibold">
                        {list}
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Header;