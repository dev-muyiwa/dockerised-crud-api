import dotenv from "dotenv";

dotenv.config()
export const config = {
    server_port: Number(process.env.PORT),
    // Database
    db_user: process.env.DB_USER,
    db_host: process.env.DB_HOST,
    db_name: process.env.DB_NAME,
    db_password: process.env.DB_PASSWORD,
    db_port: Number(process.env.DB_PORT)
}