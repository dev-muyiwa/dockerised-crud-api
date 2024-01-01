import express, { Application } from "express";
import authRouter from "../routes/auth.route";
import postRouter from "../routes/post.route";

const app: Application = express();

// Application-level middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/posts", postRouter);

export default app;
