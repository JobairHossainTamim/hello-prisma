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
    const option = req.query;
    const result = await PostService.getAllPost(option);
    res.send({
      success: true,
      message: "Get  All Post  Success",
      data: result.data,
      total: result.total,
    });
  } catch (error) {
    res.send(error);
  }
};
const updatePost = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    const result = await PostService.updatePost(id, data);
    res.send({
      success: true,
      message: "Update Successfully ",
    });
  } catch (error) {
    res.send(error);
  }
};
const deletePost = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const result = await PostService.deletePost(id);
    res.send({
      success: true,
      message: "delete Successfully ",
    });
  } catch (error) {
    res.send(error);
  }
};

export const postController = {
  CreatedPost,
  getAllPost,
  updatePost,
  deletePost,
};
