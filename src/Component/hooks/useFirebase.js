import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error , setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth();
    const registration = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
            .catch((error) => {
              setError(error.message)
            });
    };
    const  signin = (email , password) => {
        return signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user);
            console.log(result.user)
        }).catch((error) => {
            setError(error.message)
        })
    };
    const signInUsingGoogle = () => {
       return  signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            }).catch((error) => {
            setError(error.message)
            });
    };
    const signInUsingGithub = () => {
    return    signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
            }).catch((error) => {
                 setError(error.message)
            });
    };
    const signInUsingFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user)
            }).catch((error) => {
                setError(error.message)
            });
    }
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        });
        return () => unSubscribed;
    }, [])
    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                setError(error.message)
            });
    }
    return {
        user,
        error,
        registration,
        signin,
        signInUsingGoogle,
        signInUsingGithub,
        signInUsingFacebook,
        logOut
    }
}
export default useFirebase;