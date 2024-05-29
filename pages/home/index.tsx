import React, { useState,useEffect } from "react";
import Header from "@/components/Header/Header";
import styles from "./index.module.css"
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/router";
import axios from "axios";
import cookies from "js-cookie";
import { links } from "@/constans/link";
import Likes from "@/utils/Likes";
import Comments from "@/utils/Comments";
import { QuestionType } from "@/types/question";
import Button from "@/components/Button/Button";


const Home = () => {
    const router = useRouter();
    const [question, setQuestion] = useState("");
    const[questionList,setQuestionList]=  useState([]);
    const [question_text,setQuestion_text]=useState("")
    const [date,setDate]=useState("")
    //const [questionList, setQuestionList] = useState([]);

    
    
    
    


    const createQuestion = async () => { 
      
        
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
          console.log(response);

      if (response.status === 200) {
        router.push("/questions");
      }
    
          //setQuestion(response.data.question);
        setQuestionList(response.data.questions)
        }
         catch (err) {
          console.log(err)
          
        }
        
       
    }; 
 
    
     useEffect(() => {
        router.query.id && createQuestion(); 
      }, [router]);

     
    
     
    
 
  
    return (
       <>
           <Header logo={"FORUM"} links={links} />
            
                
                <form className={styles.form} >
                    <h2 >Create a Question</h2>
                    
                    
                        <input
                            
                            placeholder='question_text'
                            required
                            value={question_text}
                            onChange={(e) => setQuestion_text(e.target.value)}
                        />
                         <input
                            placeholder="date"
                            value={date}
                            required
                            onChange={(e) => setDate(e.target.value)}
                        />
                    
                    <Button isLoading={false} title="SUBMIT QUESTION" onClick={createQuestion}/>
                </form>
                
            
            <Footer links={links}/>
           </> 
        
    );
};

export default Home;