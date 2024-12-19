import Header from "./Header";
import { useState } from "react";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);


    };


    return (
        <div>
            <Header />
            <div className="absolute">

                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_small.jpg"
                    alt="Background Logo"
                />
            </div>
            <form className="absolute w-3/12 bg-black mx-auto right-0 left-0 p-12 my-36 text-white  bg-opacity-80 rounded-md">
                <h1 className="font-bold text-3xl pb-5 "> {isSignInForm ? "Sign In " : " SignUp "}</h1>

                {!isSignInForm &&
                    <input 
                    type=" text" placeholder="Enter Name" className="p-3 my-2 w-full rounded-sm text-sm">
                        </input>}

                <input
                 type="text" placeholder="Email Address or Mobile Number" 
                 className="p-3 my-2 w-full rounded-sm text-sm" />

                <input type="password" placeholder="Password" 
                className="p-3 my-2 w-full rounded-sm " />

                <button 
                className="p-2 my-4 bg-red-600 rounded-sm w-full ">
                    {isSignInForm ? "Sign In " : " SignUp "}</button>

                <p onClick={toggleSignInForm} className="cursor-pointer"> 
                    {isSignInForm ? "New to Netflix?Sign up now " : "AlreadyRegistered? SignIn Now"}</p>
            </form>
        </div>
    );
};

export default Login;