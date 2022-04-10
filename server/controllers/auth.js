import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { jwtSecret } from '../config.js';
import User from '../models/users.js';

//Register controller
export const Register = async (req, res) => {
  const { username, email, password } = req.body;
  // Validating user data.
  if (!username || !email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }
  try {
    //Check if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error('User already exists!');
    }
    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create user
    const user = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        id: user.id,
        token: generateToken(user.id),
        username: user.username,
      });
    } else {
      res.status(400);
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    res.status(400);
    throw new Error('Invalid user data');
  }
};

//Login controller
export const Login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password || password.length < 8) {
    res.status(400).json('Invalid credentials');
  }

  try {
    //Check user  email

    const user = await User.findOne({ email });

    if (user) {
      await bcrypt.compare(password, user.password);
    }

    return res.status(200).json({
      id: user.id,
      token: generateToken(user._id),
      username: user.username,
    });
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};

//Token generator
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, { expiresIn: '30d' });
};
