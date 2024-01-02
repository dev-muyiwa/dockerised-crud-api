import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user.model";
import { Post } from "../models/post.model";
import { config } from ".";

export const dbSetup = async () => {
  const sequelize: Sequelize = new Sequelize({
    dialect: "postgres",
    host: config.db_host,
    port: config.db_port,
    database: config.db_name,
    username: config.db_user,
    password: config.db_password,
    models: [User, Post],
    logging: false,
  });

  try {
    await sequelize.authenticate();
    await sequelize.sync();

    console.log("connected to postgres database...");
    return sequelize;
  } catch (err) {
    throw err;
  }
};
