import * as request from "supertest";
import * as express from "express";
import type { Express } from 'express';
import { up } from "./up";

describe("middleware - up", () => {
  let app: Express;

  beforeEach(() => {
    app = express();
    app.use("/up", up);
  });

  it("should", () => {
    return request(app).get("/up").expect(200).expect("OK");
  });
});
