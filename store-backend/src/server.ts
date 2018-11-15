require('dotenv').config();
const {
  PORT
} = process.env;

import * as Koa from "koa";
import * as Router from "koa-router";
import * as bodyParser from "koa-bodyparser";
import * as cors from 'kcors';
import { dbConnect } from "./database/connection";
import rootRouter from "./router";

class Server {
  app:Koa = null;
  router: Router = null;

  constructor() {
    this.app = new Koa();
    this.router = new Router();
    this.middleware();
  };

  middleware() {
    // Add all application routes
    this.router.use('/api', rootRouter.routes());

    this.app.use(cors());
    this.app.use(bodyParser());
    this.app.use(this.router.routes());
    this.app.use(this.router.allowedMethods());
  }

  async connectDB() {
    try {
      await dbConnect();
      console.log('Success db connection');
    } catch (error) {
      console.error(`Fail db connection: ${error.message}`);
    }
  };

  async listen() {
    await this.connectDB();
    this.app.listen(PORT);

    console.info(`Store-Backend application is up and running on port ${PORT}`);
  }
};

export default Server;