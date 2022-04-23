import { Sequelize } from "sequelize";

const db = new Sequelize("sales_db", "manual", "Butterfly123!@#", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
