import { Router } from "express";

import healthRoutes from "./health.routes";
import cubeRoutes from "./cube.routes";

const router = Router();

router.use("/health", healthRoutes);
router.use("/cubes", cubeRoutes);

export default router;
