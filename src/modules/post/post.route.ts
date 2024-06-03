import express from "express";
import { postController } from "./post.controller";

const router = express.Router();

router.post("/create", postController.CreatedPost);
router.get("/", postController.getAllPost);

export const postRouter = router;
