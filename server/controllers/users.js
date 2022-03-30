import bcrypt from 'bcrypt';

import User from '../models/users.js';

//Get user
export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    const { password, ...rest } = user._doc;

    res.status(200).json(rest);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Update user

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  if (password) {
    password = bcrypt.hashSync(password).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      id: updatedUser.id,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

//Delete user

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json('User deleted successfully');
  } catch (error) {
    res.status(500).json(error);
  }
};
