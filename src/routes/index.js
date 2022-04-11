import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  res.status(200).send({
    title: "Atletic App API",
    version: "0.0.1",
  });
});

export default routes;
