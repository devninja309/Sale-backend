import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Sale = db.define(
  "sale",
  {
    eport: {
      type: DataTypes.STRING
    },
    via: {
      type: DataTypes.STRING
    },
    cost: {
      type: DataTypes.STRING
    },
    scost: {
      type: DataTypes.STRING
    },
    expenses: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    owner: {
      type: DataTypes.STRING
    },
    purdate: {
      type: DataTypes.DATE
    },
    picdate: {
      type: DataTypes.DATE
    },
    email: {
      type: DataTypes.STRING
    },
    number: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    staten: {
      type: DataTypes.STRING
    },
    average_cost:{
      type: DataTypes.FLOAT
    },
    purchased_cost:{
      type: DataTypes.FLOAT
    },
    eport:{
      type: DataTypes.STRING
    },
    createdAt: {
      field: "created_at",
      type: Sequelize.DATE
    },
    updatedAt: {
      field: "updated_at",
      type: Sequelize.DATE
    }
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

(async () => {
  await db.sync();
})();

export default Sale;
