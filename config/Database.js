import { Sequelize } from "sequelize";

const db = new Sequelize("sales_db", "manual", "Butterfly123!@#", {
  host: "208.109.190.55",
  dialect: "mysql",
});

export default db;
