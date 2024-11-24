import router from "./routers.js";
import express from "express";
import dotenv from "dotenv/config";

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.info(`server is already running`);
});

export default app;
