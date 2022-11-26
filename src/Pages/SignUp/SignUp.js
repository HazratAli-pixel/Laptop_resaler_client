import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signupsvg from '../../assets/icons/Signup-bro.svg';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import useToken from '../../hooks/useToken';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser,signinWithGoogle } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const [radiovalue, setradiovalue] = useState('Buyer')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useTitle("Signup Form")
    
    if(token){
        navigate('/');
    }

    const handleSignUp = (datas) => {
        const formData = new FormData()
        setSignUPError('');
        const imghoskey = process.env.REACT_APP_IMGBB_KEY
        const image = datas.photo[0]
        formData.append('image',image)
        console.log(radiovalue)

        const url =`https://api.imgbb.com/1/upload?key=${imghoskey}`
        fetch(url,{
            method:"POST",
            body: formData
        })
        .then(res =>res.json())
        .then(imgdata => {
            createUser(datas.email, datas.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: datas.name,
                    photoURL: imgdata.data.display_url
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(datas.name, datas.email, radiovalue, datas.address);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
        })




        // const {data:imgbbupload, isLoading} = useQuery({
        //     queryKey:['imgbbupload'],
        //     queryFn: async ()=>{
                
        //         const resdata = await res.json()
        //         return resdata
        //     }
        // })

        
    }

    //for database information store
    const saveUser = (name, email, usertype = 'Buyer', address= '') =>{
        const user ={name, email,usertype,address};
        fetch('https://doctors-portal-', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{ 
            setradiovalue('Buyer')
            setCreatedUserEmail(email);
            navigate(from, { replace: true });
        })
    }

    const signupwithgoogle = ()=>{
        signinWithGoogle()
        .then(res =>{
            const userInfo = res.user
            const {displayName, email} = userInfo
            const name = displayName
            saveUser(name, email)
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
                                        <label className="label cursor-pointer" onClick={()=> setradiovalue('Saler')}>
                                            <span className="label-text">Saler Account</span> 
                                            <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer" onClick={()=> setradiovalue('Buyer')}>
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
                            <button className='btn btn-outline w-full' onClick={signupwithgoogle}>CONTINUE WITH GOOGLE</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;