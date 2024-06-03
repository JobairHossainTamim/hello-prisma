import { Request, Response } from "express";
import { PostService } from "./post.service";

const CreatedPost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPost(req.body);

    res.send({
      success: true,
      message: "Post Create Success",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllPost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getAllPost();
    res.send({
      success: true,
      message: "Get  All Post  Success",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const postController = {
  CreatedPost,
  getAllPost,
};
