import Link from "next/link";
import React, { useEffect, useState } from "react";
import Styles from "@/styles/Blogs.module.css";
import * as fs from "fs";
const Blog = (props) => {
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
      <div className={Styles.blogs}>
        <div>
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
};
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
export default Blog;
