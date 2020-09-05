import asyncHandler from '../middleware/async';
import UserModel from '../models/UserModel';

// add user
export const addUser = asyncHandler(async (req, res) => {
  const { userName, email, address } = req.body;

  // simple validation
  if (!userName || !email || !address) {
    return res.status(400).json({ msg: 'Fill All Input' });
  }
  // check user
  const user = await UserModel.findOne({ email });
  if (user) {
    return res.status(500).json({
      success: false,
      msg: 'Email already exists',
    });
  }
  const newUser = new UserModel({
    userName,
    email,
    address,
  });
  await newUser.save();
  return res.status(201).json({
    success: true,
    msg: 'User Created Success',
    newUser,
  });
});

// edit user
export const editUser = asyncHandler(async (req, res) => {
  const user = await UserModel.findOne({ _id: req.params.id });
  if (!user) {
    return res.status(204).json({
      success: false,
      msg: 'User Not Found',
    });
  }
  const updateUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  return res.status(200).json({
    success: true,
    msg: 'User Update success',
    updateUser,
  });
});
