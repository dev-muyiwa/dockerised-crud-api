import {
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { ulid } from "ulid";
import { Post } from "./post.model";

@Table
class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.STRING,
    defaultValue: () => ulid(),
  })
  id!: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  firstName!: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  lastName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @HasMany(() => Post, "authorId")
  posts!: Post[];

  getBasicInfo(): object {
    const { id, firstName, lastName, email } = this;
    return { id, firstName, lastName, email };
  }
}

export { User };
