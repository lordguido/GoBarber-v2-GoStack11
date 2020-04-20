import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

import AppError from '../errors/AppError';

import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
<<<<<<< HEAD
      throw new Error('Incorrect email/password combination.');
=======
      throw new AppError('Incorrect email/password combination.', 401);
>>>>>>> 39593e5406b790523496da18f3534687e9387af1
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
<<<<<<< HEAD
      throw new Error('Incorrect email/password combination.');
=======
      throw new AppError('Incorrect email/password combination.', 401);
>>>>>>> 39593e5406b790523496da18f3534687e9387af1
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
