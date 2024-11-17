import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.init";


export const AuthContex = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoding]  = useState(true);
    // console.log(user);

    const createNewUser = (email, password) => {
        setLoding(true)
        return  createUserWithEmailAndPassword(auth, email, password)

        
    }

    const userLogin = (email, password)=>{
        setLoding(true)
        return(
            signInWithEmailAndPassword(auth, email, password)
            
        )
    }


    const logOut = () => {
        signOut(auth)
        .then(()=> {
            
            console.log('successfully LogOut');
        })
        .catch((error)=> {
            console.log("Boss I am from Error", error);
        })

    }

     const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading: loading
     }

     useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoding(false)
        })
        return ()=>{
            unsubscribe();
        }
        // setLoding()
     },[])

  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
