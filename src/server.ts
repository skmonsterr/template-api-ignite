import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use(categoriesRoutes);

app.listen(8888, () => {
  console.log("Server running on PORT 8888");
});
