import exp from "express";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import { UserModel }
from "../models/UserModel.js";

export const authApp =
exp.Router();


// REGISTER

authApp.post(
  "/register",
  async (req, res) => {

    try {

      const userData = req.body;

      const existingUser =
      await UserModel.findOne({
        email: userData.email
      });

      if (existingUser) {

        return res.status(400).json({
          message: "User already exists"
        });

      }

      const hashedPassword =
      await bcrypt.hash(
        userData.password,
        10
      );

      userData.password =
      hashedPassword;

      const newUser =
      new UserModel(userData);

      await newUser.save();

      res.status(201).json({
        message: "Registered Successfully"
      });

    }

    catch (error) {

      res.status(500).json({
        message: error.message
      });

    }

  }
);


// LOGIN

authApp.post(
  "/login",
  async (req, res) => {

    try {

      const {
        email,
        password
      } = req.body;

      const user =
      await UserModel.findOne({
        email
      });

      if (!user) {

        return res.status(400).json({
          message: "Invalid Email"
        });

      }

      const isMatched =
      await bcrypt.compare(
        password,
        user.password
      );

      if (!isMatched) {

        return res.status(400).json({
          message: "Invalid Password"
        });

      }

      const token =
      jwt.sign(

        {
          id: user._id,
          email: user.email,
        },

        process.env.SECRET_KEY,

        {
          expiresIn: "1d"
        }

      );

      res.status(200).json({

  message: "Login Success",

  token,

  user: {

    username: user.username,

    email: user.email,

  },

});

    }

    catch (error) {

      res.status(500).json({
        message: error.message
      });

    }

  }
);