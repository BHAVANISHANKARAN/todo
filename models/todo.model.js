import { DataTypes } from "sequelize";
import { sequelize } from "../config.js";

const Todo = sequelize.define(
  "Todo",
  {
    // Model attributes are defined here
    note: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Not completed",
    },
  },
  {
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
console.log(Todo === sequelize.models.Todo); // true

export { Todo };
