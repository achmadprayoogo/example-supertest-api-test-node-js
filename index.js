import router from "./routers.js";
import express from "express";
import dotenv from "dotenv/config";
import { errorHandler } from "./controllers.js";

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use("/", router);
app.use(errorHandler); // must be the last middleware

app.listen(port, () => {
  console.info(`server is already running`);
});

export default app;
