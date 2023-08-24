// import styles from "../styles/submissionForm.scss"
"use client";
import { state, useState } from "react";

export default function ContactForm() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(['']);
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full Name", fullname);
    console.log("Email", email);

    const res = await fetch(`/api/submitForm/route`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
      })
    });
    // console.log(res);
    const { msg } = await res.text();
    // console.log(msg);
    // setError(msg);
    // console.log(error);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col gap-5"
      >
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            type="text"
            id="fullname"
            placeholder="Umang Goel"
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="umang@gmail.com"
          />
        </div>
        <br />
        <button className="p-3 bg-green-700 text-black font-bold" type="submit">
          Submit
        </button>
      </form>
      <div>
        <div>Error Msg</div>
      </div>
    </>
  );
}
