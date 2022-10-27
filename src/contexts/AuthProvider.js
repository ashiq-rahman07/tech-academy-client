import { createContext, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from "../firebase/firebase.config";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);


//google sighn in
    const providerLogin = (provider) => {
        setLoading(true);
      return  signInWithPopup(auth, provider)
        
    }
//register
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
//sign in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
//update user profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    //email verify
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }
    //logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
//user state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);
            setUser(currentUser);
            // if (currentUser === null || currentUser.emailVerified) {
            //     setUser(currentUser);
            // }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
         providerLogin,
          logOut,
           verifyEmail, 
           updateUserProfile, 
           signIn,
            createUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

