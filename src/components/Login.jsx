import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMAGE, USER_IMAGE } from "../utils/constants";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);



    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();


    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    const handleButtonClick = () => {

        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message) return;

        if (!isSignInForm) {

            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value)
                //name.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_IMAGE,
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(
                            addUser({
                                uid: uid, email: email, displayName: displayName, photoURL: photoURL
                            }));

                    }).catch((error) => {
                        setErrorMessage(error.message)
                    });

                    //console.log(user)

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);

                });

        } else {

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    ///console.log(user)


                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);

                });


        }

    }



    return (
        <div>
            <Header />
            <div className="absolute">

                <img className="h-screen object-cover md:w-full md:h-full md:object-cover"
                    src={BG_IMAGE}
                    alt="Background Logo"
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()}
                className="absolute my-32 w-full md:w-3/12 bg-black mx-auto right-0 left-0 p-12 md:my-36 text-white  bg-opacity-80 rounded-md">
                <h1 className="font-bold  text-2xl md:text-3xl pb-5 "> {isSignInForm ? "Sign In " : " SignUp "}</h1>

                {!isSignInForm &&
                    <input
                        ref={name}
                        type=" text" placeholder="Enter Name" className="p-3 my-2 w-full rounded-sm text-sm  bg-gray-700">
                    </input>}

                <input
                    ref={email}
                    type="text" placeholder="Email Address or Mobile Number"
                    className="p-3 my-2 w-full rounded-sm text-sm bg-gray-700" />

                <input
                    ref={password}

                    type="password" placeholder="Password"
                    className="p-3 my-2 w-full rounded-sm bg-gray-700 " />
                <p className="text-red-600 text-md font-bold"> {errorMessage}</p>

                <button
                    className="p-2 my-4 bg-red-600 rounded-sm w-full " onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In " : " SignUp "}</button>

                <p onClick={toggleSignInForm} className="cursor-pointer">
                    {isSignInForm ? "New to Netflix? Sign up now " : "Already Registered? SignIn Now"}</p>
            </form>
        </div>
    );
};

export default Login;