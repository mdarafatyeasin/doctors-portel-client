import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        console.log(user._tokenResponse.displayName)
    }
    return (
        <div className='flex mt-20 justify-center item-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title m-auto text-primary font-bold text-3xl"> Log In</h2>
                    <div class="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-outline"> Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;