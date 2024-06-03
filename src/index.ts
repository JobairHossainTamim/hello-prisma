import express, { Application } from "express";
import cors from "cors";
import { userRouter } from "./modules/user/user.route";
import { categoryRouter } from "./modules/category/category.route";
import { postRouter } from "./modules/post/post.route";

// Port
const port = process.env.PORT || 3022;

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// All App router
app.use("/api/v1/user", userRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/post", postRouter);

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
