import express from 'express';

import { addUser, editUser } from '../controllers/userController';

const router = express.Router();

router.route('/add-user').post(addUser);
router.route('/edit-user/:id').put(editUser);

export default router;
