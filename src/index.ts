import express, { Application } from "express";
import cors from "cors";
import { userRouter } from "./modules/user/user.route";

// Port
const port = process.env.PORT || 3022;

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// All App router
app.use("/api/v1/user", userRouter);

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
