import * as express from 'express';
import type { Request, Response, NextFunction } from 'express';

// middleware
function hello(req: Request, res: Response, next: NextFunction) {
  console.log('hello');
  next()
}

function foobar(req: Request, res: Response, next: NextFunction) {
  console.log('foobar');
  next()
}

const app = express();

app.get('/', hello, foobar);
// app.get('/', hello);
// app.get('/', foobar);

app.listen(3000, () => {
  console.log(`🚀 server started at: http://localhost:3000`);
})