// importing the firebase tools from the config folder 
import { auth,googleProvider } from "../config/firebase";

// importing the firebase authentication methods 

import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";

//importing useState from react 

import {useState} from "react"

//creating an login function with functionalities of signing withgoogle signup and signin and logout




export const Login = () => {
   
    //Using useState of react to set the password entered by the user 
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   //signup function to create a new user with firebase method and handling the errors
   
    const signUp = async () =>{
        try{
        createUserWithEmailAndPassword(auth,email, password)
        }catch(err){
            console.error(err);
        }
    
    
    };

    //Below all are the same functions as above using the firebase methods to perform the actions 

    const signIn = async () =>{
        try{
             signInWithEmailAndPassword(auth,email,password)
        }catch(err){
            console.error(err);
        }

    }

    const signInWithGoogle = async () =>{
        try{
        signInWithPopup(auth,googleProvider)
        }catch(err){
            console.error(err);        }
    
    
    };
    const logOut = async () =>{
        try{
        signOut(auth,)
        }catch(err){
            console.error(err);        }
    
    
    };

    // return functions displays a login form with eventlisteners and buttons 

      
    return (
        <div>
            <input placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}/> <br/>
        
            <input placeholder="Enter your password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}/><br/>
           
           <button onClick={signIn}> Sign in </button>
            
            <button onClick={signUp}>Sign up</button>

            <button onClick={signInWithGoogle}>Sign In with Google</button>

            <button onClick={logOut}>Logout</button>

            
        </div>
    )
}