import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello prisma ");
});

router.post("/create-user", userController.insertIntoDb);
router.post("/profile", userController.insertOrUpdateProfile);

export const userRouter = router;
