import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { User } from "./user.model";
import { ulid } from "ulid";

class Post extends Model {
  public id!: number;
  public title!: string;
  public content!: string;
  public authorId!: number;
}

Post.init(
  {
    id: {
      type: DataTypes.STRING,
      defaultValue: () => ulid(),
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Post",
    tableName: "posts",
  }
);

Post.belongsTo(User, { foreignKey: "authorId", as: "author" });

export { Post };
