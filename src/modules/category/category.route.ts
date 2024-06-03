import express from "express";
import { categoryController } from "./category.controller";

const router = express.Router();

router.post("/insert", categoryController.insertInDB);

export const categoryRouter = router;
