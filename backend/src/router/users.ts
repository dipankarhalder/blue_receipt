import express from "express";

import { isAuthenticated, isOwner } from "../middlewares";
import { getAllUsers, viewUser, updateUser, deleteUser } from "../controllers/users";

// user router
export default (router: express.Router) => {
  router.get("/v1/users", isAuthenticated, getAllUsers);
  router.get("/v1/user/:id", isAuthenticated, isOwner, viewUser)
  router.patch("/v1/user/:id", isAuthenticated, isOwner, updateUser)
  router.delete("/v1/user/:id", isAuthenticated, isOwner, deleteUser);
}