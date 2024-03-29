import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import OpenAI from "openai";
import { useState } from "react";

export default function Home() {
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
    dangerouslyAllowBrowser: true,
  });
  const [userRequest, setUserRequest] = useState("");
  const [inputValue, setInputValue] = useState("");

  const onHandleChatGPT3 = async (e) => {
    e.preventDefault();
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: [
        {
          role: "system",
          content: inputValue,
        },
      ],
    });
    setUserRequest(completion.choices[0].message.content);
    setInputValue("");
  };

  const onHandleInput = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.Home}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} `}>
        <h1 className={styles.title}>Just ask the chatbot</h1>
        <form onSubmit={onHandleChatGPT3}>
          <input type="text" value={inputValue} onChange={onHandleInput} />
          <input type="submit" value="Cerca" />
        </form>
        <div>
          <ul className={styles.containerUl}>
            {userRequest ? (
              userRequest.split("\n").map((item) => <li key={item}>{item}</li>)
            ) : (
              <p>Please wait a few seconds, your response will appear here</p>
            )}
          </ul>
        </div>
      </main>
    </div>
  );
}
