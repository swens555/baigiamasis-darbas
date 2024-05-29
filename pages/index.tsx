import React from "react";
import Header from "@/components/Header/Header";
import { links } from "../constans/link";
import LoginForm from "../components/LoginForm/LoginForm";
import Footer from "@/components/Footer/Footer";

const Index = () => {
  return (
    <div>
      <Header logo={"FORUM"} links={links} />
      <LoginForm />
      <Footer links={links}/>
    </div>
  );
};

export default Index;