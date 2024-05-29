import React from "react";
import Header from "@/components/Header/Header";
import { links } from "../../constans/link";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import Footer from "@/components/Footer/Footer";

const Index = () => {
  return (
    <div>
      <Header logo={"FORUM"} links={links} />
      <RegisterForm />
      <Footer links={links}/>
    </div>
  );
};

export default Index;