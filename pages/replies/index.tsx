import React from 'react'
import Header from '@/components/Header/Header';
import { links } from "../../constans/link";
import Footer from '@/components/Footer/Footer';
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';


const index = () => {
  return (
    <div>
       <Header logo={"FORUM"} links={links}/>
       <Footer/>
       
    </div>
  )
}

export const getServerSideProps = ({ req,res }) => {
    setCookie('test', 'value', { req, res, maxAge: 60 * 6 * 24 });
    getCookie('test', { req, res });
    getCookies({ req, res });
    deleteCookie('test', { req, res });
  
    return { props: {} };
  };


export default index