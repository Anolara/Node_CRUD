import express from "express";

import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middlewares/errorMiddleware.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "okok",
  });
});

app.use("/users", userRoutes);
app.use(errorHandler);

export default app;
