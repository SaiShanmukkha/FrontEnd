import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), "data");
  const fileContents = await fs.readFile(jsonDirectory + "/load.txt", "utf8");
  res.status(200).send(fileContents);
}
