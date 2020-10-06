import * as request from 'supertest';
import * as express from 'express';
import { app } from './app';

describe('server app', () => {

  it('should respond to up request', () => {
    return request(app)
      .get('/up')
      .expect(200)
      .expect('OK')
  });

  it('should echo the request params', () => {
    return request(app)
      .get('/echo?hello=world')
      .expect(200)
      .expect('{"hello":"world"}')
  });
});
