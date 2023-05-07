// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from "fs";
export default async function handler(req, res) {
  const data = await fs.promises.readdir(`blogdata/`);
  let allBlogs = [];
  let files;
  for (let i = 0; i < data.length; i++) {
    files = await fs.promises.readFile("blogdata/" + data[i], "utf-8");
    allBlogs.push(JSON.parse(files));
  }
  res.status(200).json(allBlogs);
}
