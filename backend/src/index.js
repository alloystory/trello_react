import express from "express";
import boardRouter from "./modules/board";

const app = express();
const port = 5000;

app.get("/ping", (_, res) => res.status(200).send("pong"));
app.use("/board", boardRouter);

app.all("*", (_, res) => res.status(403).end());

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
