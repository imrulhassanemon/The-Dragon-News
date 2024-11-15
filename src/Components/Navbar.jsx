import { useContext } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";


const Navbar = () => {
    const {user} = useContext(AuthContex)
    return (
        <div className="flex justify-between items-center">
            <div>
                {user && user.name}
            </div>
            <div className="space-x-5">
                <NavLink to={'/'}> Home</NavLink>
                <NavLink to={'/about'} >About</NavLink>
                <NavLink to={'career'}>Career</NavLink>
            </div>
            <div className="flex items-center gap-3">
                <FaCircleUser className="text-[35px] " />
                <Link to={'/auth/login'} className="btn rounded-none btn-neutral">Login</Link >
            </div>
        </div>
    );
};

export default Navbar;