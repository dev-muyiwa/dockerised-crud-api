import express, { Application } from "express";

const app: Application = express();

// Application-level middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Routes
app.use('/api/v1/auth');
app.use('/api/v1/users');
app.use('/api/v1/posts');


export default app;