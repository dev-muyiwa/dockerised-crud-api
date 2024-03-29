import { Request, Response } from "express";
import { User } from "../models/user.model";

export default class AuthController {
  async register(req: Request, res: Response): Promise<Response> {
    const { firstName, lastName, email, password: passwordInput } = req.body;
    const existingUser: User | null = await User.findOne({
      where: { email: email.trim() },
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "an account exists with that email address" });
    }

    const user = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email.trim(),
      password: passwordInput,
    });

    const {password, ...data} = user.dataValues

    return res.status(201).json({ message: "account created", data: data });
  }

  async login(req: Request, res: Response): Promise<Response> {
    const { email, password: passwordInput } = req.body;
    const existingUser: User | null = await User.findOne({
      where: { email: email.trim() },
    });
    if (!existingUser || existingUser.password !== passwordInput) {
      return res.status(404).json({ message: "invalid login credentials" });
    }
    const { password, ...user } = existingUser.dataValues;
    return res.status(201).json({ message: "login successful", data: user });
  }
}
