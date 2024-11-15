import { createContext, useState } from "react";

export const AuthContex = createContext();

const AuthProvider = ({children}) => {
    const [user, setUer] = useState(null)

     const authInfo = {
        user,
        setUer
     }

  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
