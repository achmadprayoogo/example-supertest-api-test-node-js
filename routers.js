import express from "express";
import { getAllUsers, getUserById } from "./controllers.js";

const router = express.Router();

router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);

export default router;
