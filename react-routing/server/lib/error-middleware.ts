import { NextFunction, Request, Response } from 'express';
import ClientError from './client-error.js';

export default function errorMiddleware(
  err: unknown,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- next must be declared for error middleware
  next: NextFunction
) {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
}