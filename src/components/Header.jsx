import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import Browse from "./Browse";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";
import { toggleGeminiSearchView } from "../utils/geminiSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";



const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const showGeminiSearch = useSelector((store) => store.gemini.showGeminiSearch)
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
    const handleGeminiSearchClick = () => {
        dispatch(toggleGeminiSearchView());
    }

    const handleSignOut = () => {

        signOut(auth)
            .then(() => {

            }).catch((error) => {
                navigate("/error");

            });
    }
    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))

    }

    return (
        <div>
            <div className="flex flex-col md:flex-row absolute px-3 py-1 md:bg-gradient-to-b md:from-black z-10 w-screen justify-between">
                <img
                    className="w-44  mx-auto md:mt-24 md:mx-0 " src={LOGO}
                    alt="Netflix Logo"></img>


                {user && (
                    <div className=" justify-between flex p-1 md:mt-24 ">
                        {showGeminiSearch && (
                            <select className="p-2 bg-gray-900 text-white m-2 rounded-sm border border-white border-solid " onChange={handleLanguageChange}>
                                {SUPPORTED_LANGUAGES.map(lang =>
                                    <option key={lang.identifier}
                                        value={lang.identifier}>
                                        {lang.name}</option>)

                                }

                            </select>
                        )}
                        <button className=" py-1 px-1 my-12 mt-0 text-sm mx-2 text-md md:py-2 md:px-3 md:mx-4 md:my-2 bg-purple-800  text-white rounded-md" onClick={handleGeminiSearchClick}> {showGeminiSearch ? "HomePage" : "Gemini Search"}</button>
                        <img className=" hidden md:block w-12 h-12 mt-2" src={user?.photoURL}
                            alt="usericon"></img>
                        <button onClick={handleSignOut} className=" -mt-14 md:mt-5 md:px-2 font-bold z-10 text-white"> Sign Out</button>

                    </div>
                )}

            </div>
            <div >
                <h1 className=" hidden md:block  absolute top-14 right-24 p-2 font-bold bg-blend-color text-white text-lg h-16 w-16 ...">
                    {user?.displayName}</h1>
            </div>
        </div>
    );

};
export default Header;