import { Request, Response } from 'express';
import UserModel from './user.model';
import { UserServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await UserServices.createUserIntoDb(user);

    //exclude the password field from the result
    const savedUser = await UserModel.findById(result._id).select('-password');

    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: savedUser,
    });
  } catch (error) {
    console.log(error);
  }
};

// get all users
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDB();

    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get a single user by id
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);

    const result = await UserServices.getSingleUserById(userId);

    if (!result) {
      throw {
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      };
    }

    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
};
