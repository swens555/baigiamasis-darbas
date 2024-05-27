import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import cookie from "js-cookie"
import Link from "next/link";
//import { hasCookie } from 'cookies-next';
import Button from "../Button/Button";

const LoginForm = () => {
    const router = useRouter();
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setError] = useState(false);
    const [isBadData, setBadData] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
        setEmail("");
        setPassword("");
    };
    const onLogin = async () => {
        setLoading(true);
        const loginData = {
          email: email,
          password: password,
        };
        if (!email || !password) {
            setError(true);
            return;
          }
          setError(false);
          console.log('fetch');
          
         
      
          try {
            const response = await axios.post(
              `${process.env.SERVER_URL}/users/login`,
              loginData
            );
      
            if (response.status === 200) {
              setBadData(false);
             cookie.set("jwt_token", response.data.jwt_token);
              router.push("/home");
            }
      
            setLoading(false);
      
            console.log("response", response);
          } catch (err) {
            setBadData(true);
            console.log("err", err);
            setLoading(false);
          }
        };
  
   
  
    return (
        <>
            
            
        <form className={styles.form} onSubmit={handleSubmit}>

            <h1>Log into your account</h1>

            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email..."
            />
                        
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password..."
            />
            <Button isLoading={isLoading} onClick={onLogin} title="Login" />
                {isError && (
            <div className={styles.error}>
                    Dont have an account?
                    <Link href="/register">Create one</Link> 
            </div>
                ) }    
        
        </form>
    
        </>)
}

export default LoginForm