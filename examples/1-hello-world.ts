import * as express from 'express';
import type { Request, Response, NextFunction } from 'express';

// middleware
function hello(req: Request, res: Response, next: NextFunction) {
  res.send('hello')
}

const app = express();

app.get('/', hello);
// app.get('/*', hello);
// app.use(hello);

app.listen(3000, () => {
  console.log(`🚀 server started at: http://localhost:3000`);
})