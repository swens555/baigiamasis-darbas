
import React,{useState} from 'react'
import styles from "@/components/RegisterForm/RegisterForm.module.css"
import Button from '../Button/Button';
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";


const Register = () => {

    const router = useRouter();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isBadData, setBadData] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ username, email, password });
        setEmail("");
        setUsername("");
        setPassword("");
    };


    const signIn = async () => {
        setLoading(true);
        const loginBody = {
          username: username,  
          email: email,
          password: password,
        };
    
        if (!username || !email || !password) {
          setError(true);
          return;
        }
    
        setError(false);
    
    try {
        const response = await axios.post(
          `${process.env.SERVER_URL}/users`,
          loginBody
        );
  
        if (response.status === 200) {
          setBadData(false);
          alert("Account created successfully!");
         
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
      <div>
         
         
              <form className={styles.form} onSubmit={handleSubmit}>
                <h1 >Create an account</h1>
                  <input
                      
                      id='username'
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="username..."
                  />
                  
                  <input
                      id='email'
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email..."
                  />
                  
                  <input
                      id="password"
                      required
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="password..."
                />
                  <Button isLoading={isLoading} onClick={signIn} title="Login" />

{isError && (
  <div className={styles.error}>Please fill all the inputs</div>
)}

{isBadData && (
  <div className={styles.error}>Your provided data is bad</div>
)}
                  <p>
                      Have an account? 
                      <Link href='/login'>Sign in</Link>
                  </p>
              </form>
        </div>
      
    )
  }
  
  export default Register