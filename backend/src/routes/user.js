import Joi from "joi";
import express from "express";
import User from "../models/user";
import { signUp } from "../validations/user";

const userRoutes = express.Router();
userRoutes.post("", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    await Joi.assert({ username, email, password }, signUp);
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.send({ userId: newUser.id, username });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});
export default userRoutes;
