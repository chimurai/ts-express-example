import * as request from 'supertest';
import * as express from 'express';
import type { Express } from 'express';
import { echo } from './echo';

describe('middleware - echo', () => {
  let app: Express;

  beforeEach(() => {
    app = express();
    app.use('/echo', echo);
  });

  it('should echo the request params', () => {
    return request(app)
      .get('/echo?hello=world')
      .expect(200)
      .expect('{"hello":"world"}')
  });

  it('should echo the request params', () => {
    return request(app)
      .get('/echo?foo=bar')
      .expect(200)
      .expect('{"foo":"bar"}')
  });
})