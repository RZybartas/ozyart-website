import express from 'express';
import { deleteUser, getUser, updateUser } from '../../controllers/users.js';
import {
  verifyToken,
  verifyTokenAndAdmin,
} from '../../middleware/verifyAuth.js';

const router = express.Router();
//Route find user by id
router.get('/find/:id', verifyTokenAndAdmin, getUser);
//Route update user
router.put('/:id', verifyToken, updateUser);
//Delete user
router.delete('/:id', verifyTokenAndAdmin, deleteUser);

export default router;
