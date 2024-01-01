import { Router } from "express";
import PostController from "../controllers/post.controller";

const postRouter: Router = Router();
const controller = new PostController();

postRouter.post("/", controller.create);
postRouter.get("/", controller.findAll);
postRouter.get("/:postId", controller.findOne);
postRouter.put("/:postId", controller.update);
postRouter.delete("/:postId", controller.delete);

export default postRouter;
