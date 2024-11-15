import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.init";


export const AuthContex = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    console.log(user);

    const createNewUser = (email, password) => {
        return  createUserWithEmailAndPassword(auth, email, password)
        
    }

    const userLogin = (email, password)=>{
        return(
            signInWithEmailAndPassword(auth, email, password)
            .then((result)=> {
                console.log(result.user)
            })
            .catch((error)=> {
                console.log("Boss I am from Error", error)
            })
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
        userLogin
     }

     useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
     },[])

  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
