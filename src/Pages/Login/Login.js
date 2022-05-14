import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    if (user) {
        console.log(user._tokenResponse.displayName)
    }

    const onSubmit = data => {


        console.log(data)
    };

    return (
        <div className='flex mt-20 justify-center item-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title m-auto text-primary font-bold text-3xl"> Log In</h2>

                    {/* ----------------------------Email and password--------------------------- */}

                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* -------------------------------------------------------------------- */}

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email:</span>
                            </label>
                            <input 
                            // register came from react hookes form
                            {...register("email", {
                                pattern: {
                                  value: /[A-Za-z]{3}/,
                                  message: 'error message'
                                }
                              })} 
                            type="email" placeholder="Enter your email" 
                            class="input input-bordered w-full max-w-xs" 
                            />
                            <label class="label">
                                <span class="label-text-alt">Alt label</span>
                            </label>
                        </div>


                        {/* -------------------------------------------------------------------- */}
                        <input  />
                        {errors.firstName?.type === 'required' && "First name is required"}

                        <input {...register("lastName", { required: true })} />
                        {errors.lastName && "Last name is required"}

                        <input type="submit" />
                    </form>

                    {/* -------------------------------------------------------------------------- */}

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"> Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;