import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/create-user", userController.insertIntoDb);
router.post("/profile", userController.insertOrUpdateProfile);
router.get("/", userController.getUser);
router.get("/:id", userController.getSingleUser);

export const userRouter = router;
