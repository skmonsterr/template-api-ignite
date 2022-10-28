import * as dotenv from "dotenv";
import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

const app = express();
dotenv.config();

const { PORT } = process.env;

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.listen(PORT, () => {
  console.log(`\nServer running on PORT ${PORT} 🚀`);
});
