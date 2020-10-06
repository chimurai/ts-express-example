import * as express from 'express';
import type { Request, Response, NextFunction } from 'express';

// middleware
function hello(req: Request, res: Response, next: NextFunction) {
  console.log('hello');
  next()
  // next(new Error('error hello'))
}

function foobar(req: Request, res: Response, next: NextFunction) {
  console.log('foobar');
  next()
}

function lipsum(req: Request, res: Response, next: NextFunction) {
  console.log('lipsum');
  res.send('OK')
  next();
}

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err.message);
  res.status(400)
  res.send('NOK')
}

const app = express();

app.get('/', hello, foobar);
app.get('/', lipsum);
app.use(errorHandler);

app.listen(3000, () => {
  console.log(`🚀 server started at: http://localhost:3000`);
})