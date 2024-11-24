import express from "express";
import { getAllUsers, getUserById } from "./controllers.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);

export default router;
