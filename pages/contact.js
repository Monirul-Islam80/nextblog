import React, { useState } from "react";
import styles from "@/styles/Contact.module.css";
const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [des, setdes] = useState("");
  const [isSent, setisSent] = useState();
  const data = { name, email, des };
  return (
    <>
      <div
        style={{
          width: "fit-content",
          backgroundColor: "black",
          color: "white",
          padding: "20px",
          textAlign: "center",
          position: "absolute",
          display: isSent && isSent.message ? "inline-block" : "none",
        }}
      >
        <span>{isSent && isSent.message}</span>
      </div>
      <div className={styles.contact}>
        <h1>Contact</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetch("http://localhost:3000/api/postcontact", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((res) => res.json())
              .then((data) => {
                setisSent(data);
                setdes("");
                setemail("");
                setname("");
              });
          }}
        >
          <div>
            <label htmlFor="name">Name:</label>
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              type="text"
              name="name"
              id="name"
              placeholder="Your full name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div className={styles.desc}>
            <label htmlFor="desc">Description:</label>

            <textarea
              value={des}
              onChange={(e) => setdes(e.target.value)}
              name="desc"
              id="desc"
              cols="20"
              rows="2"
              placeholder="write your feedback"
              required
            ></textarea>
          </div>

          <div>
            <input type="submit" placeholder="Submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
