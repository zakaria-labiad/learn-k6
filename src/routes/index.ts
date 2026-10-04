import { Router } from "express";

import healthRoutes from "./health.routes.ts";
import cubeRoutes from "./cube.routes.ts";

const router = Router();

router.use("/health", healthRoutes);
router.use("/cubes", cubeRoutes);

export default router;
