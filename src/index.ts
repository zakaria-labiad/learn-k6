import "dotenv/config";
import express from "express";
import morgan from "morgan";

import router from "./routes/index.ts";
import logger from "./utils/logger.ts";

const app = express();
const HoST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.use("/api", router);

app.listen(PORT, () => {
  logger.info(`Server running on http://${HoST}:${PORT}`);
});
