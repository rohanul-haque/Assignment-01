/**
 * @copyright 2026
 * @author Rohanul Haque Rohan - MERN Stack Developer
 * @license Apache-2.0
 */

/**
 * Third-Party Module
 */
import express from "express";

/**
 * API Routes
 */
import userRoute from "@/modules/user/user.routes";

/**
 * Express Router Initialization
 */
const router = express.Router();

/**
 * Mounting routes
 */
router.use("/users", userRoute);

export default router;
