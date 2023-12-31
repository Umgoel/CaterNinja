import React from "react";
// import OrderForm from "../components/OrderForm";
import SignupForm from "../components/signup-form";

const mail = () => {
  return (
    <section className="container grid h-full items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col h-full max-w-[980px] items-center justify-center mx-auto">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl mb-5">
         Mails to your inbox
        </h1>
        <SignupForm />
      </div>
    </section>
  );
};

export default mail;
