import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config.js';
import User from '../models/users.js';

//Verify Token
export const verifyToken = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      //Get token from header
      const token = req.headers.authorization.split(' ')[1];

      //Verify token
      const decoded = jwt.verify(token, jwtSecret);

      //Get user from
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized');
    }
  }
};

//Verify Token and Admin role
export const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You don't have permissions!");
    }
  });
};
