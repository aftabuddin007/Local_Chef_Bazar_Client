import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

const registerUser = (email,password)=>{
      setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const loginInUser = (email,password)=>{
  setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

const logOut = async () => {
    setLoading(true)
    return signOut(auth)
  }

const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }



useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth, async currentUser =>{
    // console.log(currentUser?.email)
    setUser(currentUser)
      setLoading(false)
})
return ()=>{
    return unsubscribe()
}
},[])












    const authInfo = {
user, setUser,loading,registerUser,loginInUser,updateUserProfile,logOut,signInWithGoogle
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;