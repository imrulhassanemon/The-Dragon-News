import { FaCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div></div>
            <div className="space-x-5">
                <NavLink to={'/'}> Home</NavLink>
                <NavLink to={'/about'} >About</NavLink>
                <NavLink to={'career'}>Career</NavLink>
            </div>
            <div className="flex items-center gap-3">
                <FaCircleUser className="text-[35px] " />
                <button className="btn rounded-none btn-neutral">Login</button>
            </div>
        </div>
    );
};

export default Navbar;