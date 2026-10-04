import { Router } from "express";
import logger from "../utils/logger";

const router = Router();

const url = process.env.API_URL + "/cubes";

console.log("API URL:", url);

router.get("/", async (req, res) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    logger.info("Fetched cubes");

    res.status(200).json(data.cubes);
  } catch (error) {
    logger.error("Failed to fetch cubes");
    res.status(500).json({
      message: "Failed to fetch cubes",
      status: "ERROR",
    });
  }
});

router.get("/:name", async (req, res) => {
  try {
    const response = await fetch(`${url}/${req.params.name}`);
    const data = await response.json();

    logger.info("Fetched cube");

    res.status(200).json(data);
  } catch (error) {
    logger.error("Failed to fetch cube");
    res.status(500).json({
      message: "Failed to fetch cube",
      status: "ERROR",
    });
  }
});

router.get("/:name/:level", async (req, res) => {
  try {
    const response = await fetch(
      `${url}?cube=${req.params.name}&level=${req.params.level}`,
    );
    const data = await response.json();

    logger.info("Fetched cube level");

    res.status(200).json(data.cubes);
  } catch (error) {
    logger.error("Failed to fetch cube");
    res.status(500).json({
      message: "Failed to fetch cube",
      status: "ERROR",
    });
  }
});

export default router;
