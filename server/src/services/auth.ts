import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

interface JwtPayload {
  _id: unknown;
  username: string;
  email: string,
}

export const getUser = (token: string): JwtPayload | null=> {
  try {
    const secretKey = process.env.JWT_SECRET_KEY || '';
    const user = jwt.verify(token, secretKey) as JwtPayload;
    return user;
  } catch (error) {
    return null;
  }
  };
  
  export const authenticateGraphQLRequest = (context: any) => {
    const authHeader = context.req.headers.authorizaton;

    if (!authHeader) {
      throw new Error('Authentication required');
    }

  const token = authHeader.split('')[1];
  const user = getUser(token);

  if (!user) {
    throw new Error('invalid or expired token');
  }

  return user;
};

  /*if (authHeader) {
    const token = authHeader.split(' ')[1];

    const secretKey = process.env.JWT_SECRET_KEY || '';

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }

      req.user = user as JwtPayload;
      return next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};

export const signToken = (username: string, email: string, _id: unknown) => {
  const payload = { username, email, _id };
  const secretKey = process.env.JWT_SECRET_KEY || '';

  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};
