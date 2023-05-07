import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Blogs.module.css";
import * as fs from "fs";
import Head from "next/head";
const sno = (props) => {
  const [data, setdata] = useState({
    title: "",
    content: "",
    author: "",
  });
  useEffect(() => {
    setdata(props.blog);
  }, []);

  return (
    <>
      <Head>
        <title>My-blog: {data.title}</title>
        <meta
          name="description"
          content="This web site is for practice parpus :)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <div className={styles.single_blog}>
        <h1>{data.title}</h1>
        {data && <div dangerouslySetInnerHTML={{ __html: data.content }}></div>}
        <h4>{data.author}</h4>
      </div>
    </>
  );
};
export async function getStaticPaths() {
  return {
    paths: [
      { params: { sno: "howtolearnjava" } },
      { params: { sno: "howtolearnjavascript" } },
      { params: { sno: "howtolearnnextjs" } },
    ],
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const myblog = await fs.promises.readFile(
    `blogdata/${context.params.sno}.json`,
    "utf-8"
  );
  const blog = await JSON.parse(myblog);
  return {
    props: { blog },
  };
}
export default sno;
