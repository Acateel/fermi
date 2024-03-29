import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./router";
import { protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";
import fileUpload from "express-fileupload";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// change file upload setting
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "fermi messager" });
});

app.use("/api", protect, router);

app.post("/signup", createNewUser);
app.post("/signin", signin);

export default app;
