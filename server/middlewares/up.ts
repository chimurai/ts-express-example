import type { Request, Response, NextFunction} from 'express';

export function up(req: Request, res: Response, next: NextFunction) {
  res.send('OK');
}
