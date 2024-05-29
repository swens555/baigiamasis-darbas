import React, { useState,useEffect } from "react";
import styles from "./replies.module.css"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { links } from "@/constans/link";
import { useParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Replies = () => {
    const router = useRouter();
    const [reply, setReply] = useState("");   const [replyList, setReplyList] = useState([]);
    const [reply, setReply] = useState("");
    const [title, setTitle] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        const fetchReplies =async () => {
     try{
    const handleSubmitReply = (e) => {
        e.preventDefault();
        console.log({ reply });
        setReply("");
    };
    const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.post(
        `${process.env.SERVER_URL}/replies`,
       
        {
          headers,
        })
        setReplyList(data.replies);
        setTitle(data.title);
     });
     catch (err) {
        console.log(err);}
        fetchReplies();
    }, [id]);
    const handleSubmitReply = (e) => {
        e.preventDefault();
        console.log({ reply });
        setReply("");
    };
      }


    return (
      <>
      <Header  logo={"FORUM"} links={links}/>
        
            <form className={styles.form} onSubmit={handleSubmitReply}>
                <h2>Reply to the question</h2>
                <textarea
                    rows={5}
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    
                  />

                <button >SEND</button>
            </form>
            <div className='thread__container'>
            {replyList.map((reply) => (
                <div className='thread__item'>
                    <p>{reply.text}</p>
                    <div className='react__container'>
                        <p style={{ opacity: "0.5" }}>by {reply.name}</p>
                    </div>
                </div>
            ))}
        </div>
       
        <Footer/>
        </>
    );
};

export default Replies;