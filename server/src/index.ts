import app from "./server";

const port = 3001;

app.listen(port, () => {
  console.log(`server start on http://localhost:${port}`);
});
