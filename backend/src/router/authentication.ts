import express from "express";
import { register, login } from "../controllers/authentication";

// register router
export default (router: express.Router) => {
  router.post("/v1/auth/register", register);
  router.post("/v1/auth/login", login);
}