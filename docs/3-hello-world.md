# Create hello world app

`./server/main.ts`

```ts
import * as express from 'express';

// create app
export const app = express();

// middleware (express)
function hello(req, res, next) {
  res.send('hello world!');
}

// configure the app
app.get('/hello', hello);


app.listen(3000, () => {
  console.log(`🚀 server started at http://localhost:3000`);
});
```

## Add types

```ts
import type { Request, Response, NextFunction} from 'express';
```

## package.json - dev

```json
{
  "scripts": {
    "dev": "ts-node-dev ./server/main.ts"
  }
}
```

## Verify with `curl`

```zsh
curl http://localhost:3000/hello

$ hello world
```
