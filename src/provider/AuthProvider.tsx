import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { app } from '../firebase/firebase.config.js'

const auth = getAuth(app);
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIN = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateProfileData = async (FullName) => {
        try {
            setLoading(true);
            await updateProfile(auth.currentUser, { displayName: FullName });
        } catch (error) {
            console.error("Error updating profile:", error);
        } finally {
            setLoading(false);
        }
    };

    const signInPop = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const providerGoogle = new GoogleAuthProvider();
    const providerFacebook = new FacebookAuthProvider();

    const signGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, providerGoogle);
    };
    const signFacebook = () => {
        setLoading(true);
        return signInWithPopup(auth, providerFacebook);
    };
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

        });

        return () => unSubscribe();
    }, []);
    const authInfo = { user, loading, logOut, signIN, signInPop, createUser, updateProfileData,signGoogle, signFacebook };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;