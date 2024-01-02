import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { Post } from "./post.model";
import { ulid } from "ulid";

class User extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public password!: number;
}

User.init(
  {
    id: {
      type: DataTypes.STRING,
      defaultValue: () => ulid(),
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
  }
);

User.hasMany(Post, { foreignKey: "authorId", as: "posts" });

export { User };
