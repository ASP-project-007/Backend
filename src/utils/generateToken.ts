import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';

export default function (user: User) {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET!);
}
