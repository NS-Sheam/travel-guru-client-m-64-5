import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200 my-5">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl font-bold">Register!!!</h1>
                    <div className="form-control">
                        <input type="text" name='firstName' placeholder="First Name" className="p-4 border-b border-black outline-none" />
                    </div>
                    <div className="form-control">
                        <input type="text" name='lastName' placeholder="Last Name" className="p-4 border-b border-black outline-none" />
                    </div>
                    <div className="form-control">
                        <input type="email" name='email' placeholder="Email" className="p-4 border-b border-black outline-none" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Password" className="p-4 border-b border-black outline-none" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Confirm Password" className="p-4 border-b border-black outline-none" />
                    </div>
                    <div className="form-control mt-6">
                        <Link>
                            <button className="btn btn-warning w-full">Register</button>
                        </Link>
                        <p className='my-2'>Already have an account? <Link to="/login" className='font-bold text-warning underline text-right hover:text-yellow-500 cursor-pointer'>login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;