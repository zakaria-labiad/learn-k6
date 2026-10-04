import { Router } from "express";
import logger from "../utils/logger.ts";

const router = Router();

router.get("/", (req, res) => {
  logger.info("Health check requested");

  res.status(200).json({
    message: "Good health!",
    statusbar: "OK",
  });
});

export default router;
