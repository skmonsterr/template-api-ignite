import * as dotenv from "dotenv";
import express from "express";

import { router } from "./routes";

const app = express();
dotenv.config();

const { PORT } = process.env;

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`\nServer running on PORT ${PORT} 🚀`);
});
