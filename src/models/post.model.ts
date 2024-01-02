import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { User } from "./user.model";
import { ulid } from "ulid";

@Table
class Post extends Model {
  @PrimaryKey
  @Column({
    type: DataType.STRING,
    defaultValue: () => ulid(),
  })
  id!: string;

  @Column({
    type: DataType.STRING(64),
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.TEXT({ length: "long" }),
    allowNull: false,
  })
  body!: string;

  @ForeignKey(() => User)
  @Column
  authorId!: string;

  @BelongsTo(() => User, "authorId")
  author!: User;
}

export { Post };
