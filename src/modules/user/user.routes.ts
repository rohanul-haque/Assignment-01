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
 * API Controller
 */
import userController from "@/modules/user/user.controller";

/**
 * Express Router Initialization
 */
const router = express.Router();

/**
 * Create User Route
 * @access - public
 * @method - POST
 * @route - /api/v1/users
 */
router.post("/", userController.createUser);

/**
 * Get All Users Route
 * @access - public
 * @method - GET
 * @route - /api/v1/users
 */
router.get("/", userController.getAllUser);

/**
 * Get User By ID Route
 * @access - public
 * @method - GET
 * @route - /api/v1/users/:id
 */
router.get("/:id", userController.getUserById);

/**
 * Update User By ID Route
 * @access - public
 * @method - PATCH
 * @route - /api/v1/users/:id
 */
router.patch("/:id", userController.updateUserById);

/**
 * Delete User By ID Route
 * @access - public
 * @method - DELETE
 * @route - /api/v1/users/:id
 */
router.delete("/:id", userController.deleteUserById);

export default router;
