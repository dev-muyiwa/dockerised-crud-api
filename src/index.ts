import app from "./config/app";
import { config } from "./config";
import { sequelize } from "./config/db";

sequelize.sync()
  .then(() => {
    app.listen(config.server_port, () => {
        console.log(`listening on port ${config.server_port}`);
    })
  })
  .catch((error) => console.log('Sequelize synchronization error: ', error));

