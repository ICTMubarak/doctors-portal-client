import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const {register, handleSubmit} = useForm()
    
    const handleLogin = data =>{
        console.log(data);
    }

    return (
        <div className='h-[800px]  flex justify-center items-center'>
    <div className='w-96 p-7'>
        <h1 className='text-xl text-center'>Login</h1>
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="form-control w-full max-w-xs">
         <label className="label"><span className="label-text">Email</span></label>
        <input type="email" {...register("email")} className="input input-bordered w-full max-w-xs"/>
     </div>
      <div className="form-control w-full max-w-xs">
         <label className="label"><span className="label-text">Password</span></label>
        <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs"/>
        <label className="label"><span className="label-text">Forget Password</span></label>
     </div>

      <input className='btn btn-accent w-full' value="Login" type="submit" />
    </form>
    <p>New to Doctors portal <Link className='text-secondary' to="/signup">Create New accoutnt</Link></p>
    <div className="divider">OR</div>
    <button className='btn btn-outline w-full'>Continue with google</button>
        </div>
        </div>
    );
};

export default Login;