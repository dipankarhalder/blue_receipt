import express from "express";

import { USERS, USER } from "../utils/routevariable";
import { isAuthenticated, isOwner } from "../middlewares";
import { getAllUsers, viewUser, updateUser, deleteUser } from "../controllers/users";

// user router
export default (router: express.Router) => {
  router.get(USERS, isAuthenticated, getAllUsers);
  router.get(USER, isAuthenticated, isOwner, viewUser)
  router.patch(USER, isAuthenticated, isOwner, updateUser)
  router.delete(USER, isAuthenticated, isOwner, deleteUser);
}