import { Request, Response } from "express";
import { categoryService } from "./category.service";

const insertInDB = async (req: Request, res: Response) => {
  try {
    const result = await categoryService.insertInDB(req.body);

    res.send({
      success: true,
      message: "Category Created Successfully ",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const categoryController = {
  insertInDB,
};
