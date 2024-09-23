import express from "express";
import { postController } from "./post.controller";

const router = express.Router();

router.post("/create", postController.CreatedPost);
router.get("/", postController.getAllPost);
router.patch("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);
export const postRouter = router;
