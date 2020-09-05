import express from 'express';

import {
  addUser,
  editUser,
  getUsers,
  deleteUser,
} from '../controllers/userController';

const router = express.Router();

router.route('/user')
  .post(addUser).get(getUsers);

router.route('/user/:id')
  .put(editUser)
  .delete(deleteUser);

export default router;
