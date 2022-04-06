import express from 'express';
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from '../../controllers/users.js';
import {
  verifyToken,
  verifyTokenAndAdmin,
} from '../../middleware/verifyAuth.js';

const router = express.Router();

//Route get all users
router.get('/', verifyTokenAndAdmin, getAllUsers);
//Route find user by id
router.get('/find/:id', verifyTokenAndAdmin, getUser);
//Route update user
router.put('/:id', verifyToken, updateUser);
//Delete user
router.delete('/:id', verifyTokenAndAdmin, deleteUser);

export default router;
