import mongoose from "mongoose";
import app from "./config/app";
import { config } from "./config";

mongoose.connect(config.db_url, {})
    .then(() => console.log("mongodb is running."))
    .catch(e => console.error(e));

app.listen(config.server_port, () => {
    console.log(`listening on port ${config.server_port}`);
})