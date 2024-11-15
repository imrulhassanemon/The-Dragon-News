import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const AuthLayOut = () => {
  return (
    <div className="font-poppins">
      AuthLayout
      <header className="py-3 w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayOut;
