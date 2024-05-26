import React from 'react'
import Header from '@/components/Header/Header';
import { links } from "../constans/link";
//import Login from './login';
//import LoginForm from '../components/LoginForm/LoginForm';
import Footer from '@/components/Footer/Footer';

const Index = () => {
  return (
    <div>
      <Header logo={"FORUM"} links={links}/>
      <Footer/>
      
    </div>
  )
}

export default Index