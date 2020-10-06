import type { Request, Response, NextFunction} from 'express';

export function echo(req: Request, res: Response, next: NextFunction) {
  res.send(JSON.stringify(req.query));
}
