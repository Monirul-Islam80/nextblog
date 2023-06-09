import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Styles from "@/styles/Blogs.module.css";
import * as fs from "fs";
import { useState } from "react";

export default function Home(props) {
  const [blogs, setblogs] = useState(props.allBlogs);

  const contentPreview = (str) => {
    let words = str.split(" ");
    let selectedWords = words.slice(0, 10);
    return selectedWords.join(" ");
  };
  const makeslag = (data) => {
    return data.replace(/\s/g, "");
  };
  return (
    <>
      <Head>
        <title>My Next App</title>
        <meta
          name="description"
          content="This web site is for practice parpus :)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>

      <div className={styles.main}>
        <h1 className={styles.name}>My Blog</h1>
      </div>
      <div className={Styles.blogs}>
        <div>
          <h2>Latest Blogs</h2>
          {blogs?.map((data, index) => (
            <div key={index}>
              <Link href={`/blogposts/${makeslag(data.title)}`}>
                <h3>{data.title}</h3>
              </Link>
              <p
                dangerouslySetInnerHTML={{
                  __html: contentPreview(data.content),
                }}
              ></p>
              <p>-{data.author}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export async function getStaticProps(context) {
  const data = await fs.promises.readdir(`blogdata/`);
  let allBlogs = [];
  let files;
  for (let i = 0; i < data.length; i++) {
    files = await fs.promises.readFile("blogdata/" + data[i], "utf-8");
    allBlogs.push(JSON.parse(files));
  }
  return {
    props: { allBlogs },
  };
}
