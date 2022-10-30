import "reflect-metadata";
import { DataSource } from "typeorm";

import { CreateCategories1667160217141 } from "./migrations/1667160217141-CreateCategories";

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "1234",
  database: "rentalx",
  synchronize: true,
  logging: true,
  entities: ["./src/modules/**/entities/*.ts"],
  subscribers: [],
  migrations: [CreateCategories1667160217141],
});

export function createConnection(host = "database"): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export default dataSource;
