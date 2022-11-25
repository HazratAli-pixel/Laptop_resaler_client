import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import signupsvg from '../../assets/icons/Signup-bro.svg';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
        navigate('/');
    }

    const handleSignUp = (data) => {
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const saveUser = (name, email) =>{
        const user ={name, email};
        fetch('https://doctors-portal-server-rust.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            setCreatedUserEmail(email);
        })
    }

    

    return (
        <div className='py-24 flex justify-center items-center'>
            <div>
                <div>
                    <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-center gap-0 sm:gap-10'>
                        <div className='w-full sm:w-1/2'>
                            <div className="text-center lg:text-left">
                                <img className='w-full' src={signupsvg} alt="loginsvg" />
                            </div>
                        </div>
                        <div className='w-96 p-7 shadow-lg rounded-lg'>
                            <h2 className='text-3xl font-bold text-center'>Sign Up</h2>
                            <form onSubmit={handleSubmit(handleSignUp)}>
                                <div className="form-control ">
                                    <label className="label"> <span className="label-text font-bold">Name</span></label>
                                    <input type="text" {...register("name", {
                                        required: "Name is Required"
                                    })} className="input input-bordered " />
                                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                </div>
                                <div className="form-control ">
                                    <label className="label"> <span className="label-text font-bold">Email</span></label>
                                    <input type="email" {...register("email", {
                                        required: true
                                    })} className="input input-bordered " />
                                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                                </div>
                                <div className="form-control ">
                                    <label className="label"> <span className="label-text font-bold">Address</span></label>
                                    <input type="text" {...register("address", {
                                        required: "Address is Required",
                                    })} className="input input-bordered " />
                                    {errors.address && <p className='text-red-500'>{errors.address.message}</p>}
                                </div>
                                <div className="form-control ">
                                    <label className="label"> <span className="label-text font-bold">Photo</span></label>
                                    <input type="file" {...register("photo", {
                                        required: "Photo is Required",
                                    })} className="file file-input file-input-bordered w-full" />
                                    {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                                </div>
                                <div className="form-control ">
                                    <label className="label"> <span className="label-text font-bold">Password</span></label>
                                    <input type="password" {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: "Password must be 6 characters long" },
                                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                    })} className="input input-bordered " />
                                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                                </div>
                                <div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Saler Account</span> 
                                            <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Buyer Account</span> 
                                            <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                        </label>
                                    </div>
                                </div>
                                <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                                {signUpError && <p className='text-red-600'>{signUpError}</p>}
                            </form>
                            <p className='py-2'>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                            <div className="divider">OR</div>
                            <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;