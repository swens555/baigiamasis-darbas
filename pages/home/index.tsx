import React, { useState,useEffect } from "react";
import Nav from "@/components/Nav/Nav";
import styles from "./index.module.css"
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/router";
import axios from "axios";
import cookies from "js-cookie";
import Likes from "@/utils/Likes";
import Comments from "@/utils/Comments";
import { QuestionType } from "@/types/question";


const Home = () => {
    
    const [question, setQuestion] = useState("");
    //const[questionList,setQuestionList]=  useState([]);
    
    
    const router = useRouter();


    const fetchQuestion = async () => {
      
        
        try {
  


          
          const headers = {
            authorization: cookies.get("jwt_token"),
          };
    
          const response = await axios.post(
            `${process.env.SERVER_URL}/questions/${router.query.id}`,
            {
              headers,
            }
          );
    
          setQuestion(response.data.question);
          //setQuestionList(response.data.questions)
        } catch (err) {
          // @ts-expect-error this is correct way to catch error
          if (err.response.status === 401) {
            router.push("/login");
          }
        }
      };
    
      useEffect(() => {
        router.query.id && fetchQuestion();
      }, [router]);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({question})
       
    };
    return (
       <>
            <Nav />
            
                
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2 >Create a Question</h2>
                    <div className={styles.home__container}>
                    <label htmlFor='question'>Title / Description</label>
                        <input
                            type='text'
                            name='question'
                            required
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                    </div>
                    <button >CREATE QUESTION</button>
                </form>
                
               
            
            <Footer/>
           </> 
        
    );
};

export default Home;