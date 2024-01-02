import app from "./config/app";
import { config } from "./config";
import { dbSetup } from "./config/db";
import { Sequelize } from "sequelize";

export let sequelize: Sequelize;
dbSetup()
  .then((value) => {
    sequelize = value;

    app.listen(config.server_port, () => {
      console.log(`listening to port ${config.server_port}...`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the Postgres database:", err);
  });
