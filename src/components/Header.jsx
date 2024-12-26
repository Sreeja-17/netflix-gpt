import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import Browse from "./Browse";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";



const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                }));
                navigate("/Browse")


            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });

        return () => unsubscribe();

    }, [])
    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    }

    const handleSignOut = () => {

        signOut(auth)
            .then(() => {

            }).catch((error) => {
                navigate("/error");

            });
    }

    return (
        <div>
            <div className="absolute px-8 py-1 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
                <img
                    className="w-44 mt-24" src={LOGO}
                    alt="Netflix Logo"></img>


                {user && (
                    <div className=" flex p-2 mt-24">
                        <select className="p-2 bg-gray-900 text-white m-2 rounded-sm border border-white border-solid ">
                            {SUPPORTED_LANGUAGES.map(lang =>
                                <option key={lang.identifier}
                                    value={lang.identifier}>
                                    {lang.name}</option>)

                            }

                        </select>
                        <button className="py-2 px-3 mx-4 my-2 bg-purple-800  text-white rounded-md" onClick={handleGptSearchClick}>GPT Search</button>
                        <img className=" w-12 h-12" src={user?.photoURL}
                            alt="usericon"></img>
                        <button onClick={handleSignOut} className="px-2 font-bold z-10 text-white"> Sign Out</button>

                    </div>
                )}

            </div>
            <div >
                <h1 className="absolute top-14 right-28 p-2 font-bold bg-blend-color text-white text-lg h-16 w-16 ...">
                    {user?.displayName}</h1>
            </div>
        </div>
    );

};
export default Header;