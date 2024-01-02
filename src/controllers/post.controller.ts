import { Request, Response } from "express";
import { Post } from "../models/post.model";
import { User } from "../models/user.model";

export default class PostController {
  async create(req: Request, res: Response): Promise<Response> {
    const { title, body, authorId } = req.body;
    const author: User | null = await User.findByPk(authorId);
    if (!author) {
      return res.status(404).json({ message: "author not found" });
    }
    const post = await Post.create({
      title: title,
      body: body,
      authorId: author.id,
    });

    return res.status(201).json({ message: "post created", data: post.dataValues });
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    const { postId } = req.params;
    const post: Post | null = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }

    return res.status(200).json({ message: "post fetched", data: post.dataValues });
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    const { authorId } = req.params;
    const posts: Post[] = authorId
      ? await Post.findAll({ where: { authorId: authorId } })
      : await Post.findAll();

    return res.status(200).json({ message: "posts fetched", data: posts });
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { postId, authorId } = req.params;
    const { title, body } = req.body;
    const post: Post | null = await Post.findOne({
      where: { id: postId, authorId: authorId },
    });
    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }
    const updatedPost = await post.update({ title: title, body: body });

    return res.status(200).json({ message: "post updated", data: updatedPost.dataValues });
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { postId, authorId } = req.params;
    const post: Post | null = await Post.findOne({
      where: { id: postId, authorId: authorId },
    });
    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }
    await post.destroy();

    return res.status(200).json({ message: "post deleted" });
  }
}
