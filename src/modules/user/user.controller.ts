import { Request, Response } from "express";
import { UserService } from "./user.service";

const insertIntoDb = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertIntoDB(req.body);

    res.send({
      success: true,
      message: "User Created Successfully ",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertOrUpdateProfile(req.body);
    res.send({
      success: true,
      message: "User Created Successfully ",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUser();
    res.send({
      success: true,
      message: "Get all user Successfully ",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getSingleUser(parseInt(req.params.id));
    res.send({
      success: true,
      message: "User Created Successfully ",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
export const userController = {
  insertIntoDb,
  insertOrUpdateProfile,
  getUser,
  getSingleUser,
};
