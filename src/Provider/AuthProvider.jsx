import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.init";


export const AuthContex = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    console.log(user);
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

    const updateUserProfail = (updatedData) =>{
        return updateProfile(auth.currentUser, updatedData)
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
        loading: loading,
        updateUserProfail
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
