import express from "express";

import { usersRouter } from "./routes/users.js";

export const app = express();

app.use(usersRouter);

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
