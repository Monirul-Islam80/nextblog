import * as fs from "fs";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const files = await fs.promises.readdir("contactdata");
    fs.promises.writeFile(
      `contactdata/cdata${files.length + 1}.json`,
      JSON.stringify(req.body),
      (err) => {
        if (err) {
          console.log("====================================");
          console.log(err);
          console.log("====================================");
          res.status(500).json({ message: "something want wrong!!!!" });
        }
      }
    );
    res.status(201).json({ message: "Message Sent" });
  } else {
    res.status(404).json({ message: "not found" });
  }
}
