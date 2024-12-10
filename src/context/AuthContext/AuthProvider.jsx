import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signOut, signInWithPopup } from 'firebase/auth';
import auth from '../../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
      
      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true)

      const createUser = (email, password)=>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
      }

      const signInUser = (email, password)=>{
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
      }
      const signInWithGoogle = ()=>{
            setLoading(true)
            return signInWithPopup(auth, googleProvider)
      }

      const signOutUser = ()=>{
            setLoading(true)
            return signOut(auth)
      }

      useEffect(()=>{
           const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
                  setUser(currentUser);
                  console.log('sate capture', currentUser)
                  setLoading(false);

            })
            return ()=>{
                  unSubscribe()
            }
      },[])
      const authInfo = {
            user,
            loading,
            createUser,
            signInUser,
            signOutUser,
            signInWithGoogle,
      }
      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;