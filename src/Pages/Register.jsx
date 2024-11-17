import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../Provider/AuthProvider';

const Register = () => {

    const {createNewUser, setUser, updateUserProfail} =  useContext(AuthContex)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handelSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get('name');

        if(name.length < 5){
          return setError('Name length should be at least 5 character')
        }

        const email = form.get('email');
        const password = form.get('password');
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

        if( !regex.test(password)){
          return setError('Your password must contain at least one lowercase, one upper case, and one number')
        }

        const photo = form.get('photo');
        

        createNewUser(email, password)
        .then(result => {
            const user = result.user;
            // console.log(user)
            setUser(user)
            updateUserProfail({displayName:name, photoURL:photo})
            .then(()=>{
              navigate('/')
            })
            .catch(error => {
              // console.log(error);
            })
        })
        .catch(err => {
            console.log("Error", err);
        })

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
              {/* <span className='text-red-600'>{error}</span> */}
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
            <span className='text-red-600 mt-3'>{error }</span>
          </div>
          <div className="form-control mt-3">
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