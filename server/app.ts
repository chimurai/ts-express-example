import * as express from 'express';
import { up } from './middlewares/up'
import { echo } from './middlewares/echo'

export const app = express();

// configure the app
app.get('/up', up);
app.use(echo);
