export const config = {
    server_port: 3000,
    // Database
    db_user: process.env.DB_USER || "postgress",
    db_host: process.env.DB_HOST || "localhost",
    db_name: process.env.DB_NAME || "dockerised-crud-api",
    db_password: process.env.DB_PASSWORD || "postgres",
    db_port: Number(process.env.DB_PORT) || 5432
}