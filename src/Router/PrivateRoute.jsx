import { useContext, useState } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { CirclesWithBar } from "react-loader-spinner";
import Loding from "../Pages/Loding";


const PrivateRoute = ({ children }) => {
  const { user,  loading } = useContext(AuthContex);

  const location = useLocation()
  console.log(location);

  if (loading) {
    return <Loding></Loding>
  }

  if (user && user.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;
