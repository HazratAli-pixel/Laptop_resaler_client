import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginsvg from '../../assets/icons/Mobile login-amico.svg';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, signinWithGoogle } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const [error, setError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    useTitle("Login Form")
    

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }
    const signinwithgoogle = ()=>{
        signinWithGoogle()
        .then(result=>{
            setError('');
            toast.success("Successfuly Loged in")
            navigate(from, {replace: true})
        })
        .then(error => setError(error.message))
    }

    return (
        <div className='py-24 flex justify-center items-center'>
            <div>
                <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-center gap-0 sm:gap-10'>
                    <div className='w-full sm:w-1/2'>
                        <div className="text-center lg:text-left">
                            <img className='w-full' src={loginsvg} alt="loginsvg" />
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2 p-7 shadow-lg rounded-lg'>
                        <h2 className='text-3xl font-bold text-center'>Login</h2>
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text font-bold">Email</span></label>
                                <input type="text"
                                    {...register("email", {
                                        required: "Email Address is required"
                                    })}
                                    className="input input-bordered w-full " />
                                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label"> <span className="label-text font-bold">Password</span></label>
                                <input type="password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                    })}
                                    className="input input-bordered w-full" />
                                <label className="label"> <span className="label-text">Forget Password?</span></label>
                                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                            </div>
                            <input className='btn btn-accent w-full' value="Login" type="submit" />
                            <div>
                                {loginError && <p className='text-red-600'>{loginError}</p>}
                            </div>
                        </form>
                        <p className='p-3'>Don't have an account? <Link className='text-secondary' to="/signup">create new</Link></p>
                        <div className="divider">OR</div>
                        <button className='btn btn-outline w-full' onClick={signinwithgoogle}>CONTINUE WITH GOOGLE</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;