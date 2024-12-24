import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import Browse from "./Browse";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";



const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();




    useEffect(() => {

       const unsubscribe= onAuthStateChanged(auth, (user) => {
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

        return()=>unsubscribe();

    }, [])

    const handleSignOut = () => {

        signOut(auth)
            .then(() => {

            }).catch((error) => {
                navigate("/error");

            });
    }

    return (
        <div>
        <div className=" absolute px-8 py-1 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
            <img
                className="w-44"
                src={LOGO}
                alt="Netflix Logo"></img>


            {user && (
                <div className="  flex p-2">
                    <img className=" w-12 h-12" src={user?.photoURL}
                        alt="usericon"></img>
                    <button onClick={handleSignOut} className="px-2 font-bold"> Sign Out</button>

                    </div>       
                
            )}

        </div>

        <div >
        <h1 className="absolute top-14 right-28 p-2 font-bold text-lg text-zinc-600 h-16 w-16 ..."> {user?.displayName}</h1>
            </div>



        </div>
    );
    
};
export default Header;