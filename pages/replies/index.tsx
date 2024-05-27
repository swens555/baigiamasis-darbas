import React, { useState } from "react";
import styles from "./replies.module.css"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { links } from "@/constans/link";

const Replies = () => {
    const [reply, setReply] = useState("");

    const handleSubmitReply = (e) => {
        e.preventDefault();
        console.log({ reply });
        setReply("");
    };

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
       
        <Footer/>
        </>
    );
};

export default Replies;