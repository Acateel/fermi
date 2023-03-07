import app from "./server";
import * as dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT

app.listen(port, () => {
  console.log(`server start on http://localhost:${port}`);
});
