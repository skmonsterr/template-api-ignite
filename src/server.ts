import * as dotenv from "dotenv";
import express from "express";
import swaggerUI from "swagger-ui-express";

import { createConnection } from "./database";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();
dotenv.config();

const { PORT } = process.env;

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

createConnection();

app.listen(PORT, () => {
  console.log(`\nServer running on PORT ${PORT} 🚀`);
});
