import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { readRecords, insertRecord } from "./src/utils/records.mjs";

const PORT = 5000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (_, res) => {
  res.send("Geetings from the time saving service!");
});

app.get("/server", async (_, res) => {
  res.send(await readRecords());
});

app.post("/server", async (req, res) => {
  res.send(await insertRecord(req.body.order));
});

app.listen(PORT, () => {
  console.log(`Hello web server is running at http://localhost:${PORT}`);
});
