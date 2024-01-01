import mongoose, { Document, Model, Schema } from "mongoose";

type PostDocument = Document & {
  title: string;
  body: string;
  author: string;
};

const PostSchema: Schema<PostDocument> = new Schema<PostDocument>(
  {
    title: {
      type: String,
      required: true,
      maxlength: 64,
    },
    body: {
      type: String,
      required: true,
      maxlength: 5000,
    },
    author: {
      type: String,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Post: Model<PostDocument> = mongoose.model("Post", PostSchema);

export { PostDocument, Post };
