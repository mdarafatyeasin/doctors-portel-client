import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
        // google 
        const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
        
        // email 
        const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useCreateUserWithEmailAndPassword(auth);

        //  update
        const [updateProfile, updating, updateError] = useUpdateProfile(auth);

        // react form
        const { register, formState: { errors }, handleSubmit } = useForm();

        let signinError;
        const navigate = useNavigate();
    
        if (error || gError || updateError) {
            signinError = <p className='text-red-500 font-bold'>{error?.message || gError?.message || updateError?.message}</p>
        };
    
        if (gLoading || loading || updating) {
            return <Loading></Loading>;
        }
    
        if (gUser || user) {
            console.log(gUser, user);
        };
    
        const onSubmit =async data => {
            await createUserWithEmailAndPassword(data.email, data.password);
            signInWithGoogle(data.email, data.password);
            await updateProfile({ displayName: data.name });
            navigate('/appointment')
    
            console.log(data);
        };
    return (
        <div className='flex mt-20 justify-center item-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title m-auto text-primary font-bold text-3xl">Sign Up</h2>

                    {/* ----------------------------Email and password--------------------------- */}

                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* -----------------------------name----------------------------- */}

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name:</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }                                   
                                })}
                                type="text" placeholder="Enter Your Full Name"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.name?.type === 'pattern' && <span className="label-text-alt">{errors.name.message}</span>}

                            </label>
                        </div>
                        {/* ------------------------------email------------------------ */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email:</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please give a valid email'
                                    }
                                })}
                                type="email" placeholder="Enter your email"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt">{errors.email.message}</span>}

                            </label>
                        </div>
                        {/* -------------------------------password--------------------- */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password:</span>
                            </label>
                            <input

                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                                type="password" placeholder="Enter your password"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt">{errors.password.message}</span>}

                            </label>
                        </div>



                        {/* -------------------------------------------------------------------- */}
                        <input type="submit" value={'Sign Up'} className='btn w-full max-w-xs text-white' />
                    </form>

                    {/* -------------------------------------------------------------------------- */}
                    <p><small>New to Doctors Portal? <Link className='text-secondary' to='/login'>Login</Link> </small></p>
                    <div className="divider">OR</div>
                    {signinError}
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"> Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;