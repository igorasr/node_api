import cors from "cors";
import express from "express";
import routes from "./src/routes/index.js";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use((req, res, next) => {
      res.header("Access-Controll-Allow-Origin", "*");
      res.header("Access-Control-Allow-Origin", "GET, POST, PUT, DELETE");
      res.header(
        "Access-Controll-Allow-Origin",
        "Content-type, Authorization, Acept, Origin, X-Requested-With"
      );

      this.app.use(cors());
      next();
    });
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
