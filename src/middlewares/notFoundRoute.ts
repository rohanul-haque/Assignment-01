/**
 * @copyright 2026
 * @author Rohanul Haque Rohan - MERN Stack Developer
 * @license Apache-2.0
 */

/**
 * Third-Party Module
 */
import { StatusCodes } from "http-status-codes";

/**
 * Type
 */
import { ERROR_CODE } from "@/utils/ERROR_CODE";
import type { Request, Response } from "express";

/**
 * Not Found Error Handler Middleware
 * @param req - The request object
 * @param res - The response object
 *
 */
const notFoundRoute = (req: Request, res: Response): void => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    code: ERROR_CODE.ROUTE_NOT_FOUND,
    message: `Route ${req.originalUrl} not found`,
  });
};

export default notFoundRoute;
