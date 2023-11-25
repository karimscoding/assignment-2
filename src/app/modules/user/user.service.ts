import bcrypt from 'bcrypt';
import { User } from './user.interface';
import UserModel from './user.model';

const createUserIntoDb = async (user: User) => {
  // hash the password
  const hashedPassword = await bcrypt.hash(user.password, 10);

  // create a new user with hash password
  const userWithHashedPassword = {
    ...user,
    password: hashedPassword,
  };

  const result = await UserModel.create(userWithHashedPassword);
  return result;
};

export const UserServices = {
  createUserIntoDb,
};
