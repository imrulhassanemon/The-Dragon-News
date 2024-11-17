import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";

const Login = () => {

    const { userLogin, setUser} = useContext(AuthContex);
    const [error, setError] = useState({})

    const location = useLocation()
    
    const navigate = useNavigate()
    
    const loginSubmit = (e) =>{
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')
        setError('')
        
        userLogin(email, password)
        .then((result)=> {
            
            const user = result.user
            setUser(user)
            navigate(location?.state? location.state:'/')
        })
        .catch((err)=> {
            
            setError({...error, login:err.code })
        })
        
    }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-xl shrink-0 rounded-none p-10">
        <h1 className="text-3xl font-bold text-center mt-5">Login Your Account</h1>
        <form onSubmit={loginSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered  bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered  bg-gray-100"
              required
            />
            <div>
                {
                    error.login && (
                        <label className="text-red-600 text-sm">{
                          error.login.slice(5, 23)
                        }</label>
                    )
                }
            </div>
          </div>
            <div className="mt-3">
            forbget
            </div>
          <div className="form-control ">
            <button onClick={userLogin} className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <div className="text-center">
            Don't have a account <br /> <span className="font-semibold"><Link className="text-red-600" to={'/auth/register'}>Register</Link></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
