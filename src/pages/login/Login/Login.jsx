import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                    <div className="form-control">
                        <input type="text" placeholder="email" className="p-4 border-b border-black outline-none" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="password" className="p-4 border-b border-black outline-none" />
                    </div>
                    <p className='text-warning underline text-right hover:text-yellow-500 cursor-pointer'>Forgot Password</p>
                    <label className="label items-center justify-start gap-3" htmlFor='remember'>
                        <span className="label-text">Remember me?</span>
                    <input type="checkbox" name="remember" id="remember" />
                    </label>
                    <div className="form-control mt-6">
                        <Link>
                            <button className="btn btn-warning w-full">Login</button>
                        </Link>
                    </div>
                    <p>Don't have an account? <Link to="/register" className='text-warning underline text-right hover:text-yellow-500 cursor-pointer font-bold'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;