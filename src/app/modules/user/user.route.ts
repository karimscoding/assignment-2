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
// get orders
router.get('/users/:userId/orders', UserControllers.getAllorders);

router.get(
  '/users/:userId/orders/total-price',
  UserControllers.calculateTotalPrice,
);

export const UserRoutes = router;
