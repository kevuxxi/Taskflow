import { createContext, useEffect, useState, useContext } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../db/firebase";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setcurrentUser] = useState(null);
    const [loading, setloading] = useState(true);

   
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setcurrentUser(user);
            setloading(false);
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );

}


export { AuthContext, AuthProvider }