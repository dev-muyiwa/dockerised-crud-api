import { Request, Response } from "express";
import { Post, PostDocument } from "../schemas/post.schema";
import { User, UserDocument } from "../schemas/user.schema";

export default class PostController {
  async create(req: Request, res: Response): Promise<Response> {
    const { title, body, authorId } = req.body;
    const author: UserDocument | null = await User.findById(authorId);
    if (!author) {
      return res.status(404).json({ message: "author not found" });
    }
    const newPost = await new Post({
      title: title,
      body: body,
      author: author._id,
    }).save();

    return res.status(201).json({ message: "post created", post: newPost });
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    const { postId } = req.params;
    const post: PostDocument | null = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }

    return res.status(200).json({ message: "post fetched", post: post });
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    const { authorId } = req.params;
    const posts: PostDocument[] = authorId
      ? await Post.find({ author: authorId })
      : await Post.find();

    return res.status(200).json({ message: "posts fetched", posts: posts });
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { postId, authorId } = req.params;
    const { title, body } = req.body;
    const post: PostDocument | null = await Post.findOneAndUpdate(
      {
        id: postId,
        author: authorId,
      },
      { title: title, body: body }
    );
    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }

    return res.status(200).json({ message: "post updated", post: post });
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { postId } = req.params;
    const post = await Post.findByIdAndDelete(postId);
    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }

    return res.status(200).json({ message: "post deleted" });
  }
}
