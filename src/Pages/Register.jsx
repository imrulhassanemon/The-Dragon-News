import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handelSubmit = (e) => {
        e.preventDefault()
        get 
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-xl shrink-0 rounded-none p-10">
        <h1 className="text-3xl font-bold text-center mt-5">Register Your Account</h1>
        <form onSubmit={handelSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name='name'
              placeholder="Enter your name"
              className="input input-bordered  bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name='photo'
              placeholder="Enter your photo URL"
              className="input input-bordered  bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name='email'
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
              placeholder="password"
              name='password'
              className="input input-bordered  bg-gray-100"
              required
            />
            
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <div className="text-center">
            Already have an account <br /> <span className="font-semibold"><Link className="text-red-600" to={'/auth/login'}>Login</Link></span>
        </div>
      </div>
    </div>
    );
};

export default Register;