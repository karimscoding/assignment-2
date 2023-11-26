import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/users', UserControllers.createUser);

router.get('/users', UserControllers.getAllUsers);

router.get('/users/:userId', UserControllers.getSingleUser);

router.put('/users/:userId', UserControllers.updateSingleUser);

router.delete('/users/:userId', UserControllers.deleteSingleUser);

// Order routes
router.put('/users/:userId/orders', UserControllers.createOrder);

export const UserRoutes = router;
