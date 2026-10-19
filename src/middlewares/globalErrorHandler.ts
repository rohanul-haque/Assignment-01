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
 * Application Modules
 */
import { API_MESSAGES } from "@/utils/API_MESSAGES";
import { ERROR_CODE } from "@/utils/ERROR_CODE";

/**
 * Type
 */
import type { NextFunction, Request, Response } from "express";

/**
 * Global Error Handler Middleware
 *
 * @param error - The error to handle
 * @param _req - The request object
 * @param res - The response object
 * @param _next - The next function
 */
const globalErrorHandler = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  // Custom Error
  const err = error as {
    statusCode?: number;
    status?: number;
    code?: string;
    message?: string;
    stack?: string;
  };

  // Set Status Code

  const statusCode =
    err.statusCode ?? err.status ?? StatusCodes.INTERNAL_SERVER_ERROR;

  // Set Error Message

  const message = err.message ?? API_MESSAGES.INTERNAL_SERVER_ERROR;

  // Send Error Response
  res.status(statusCode).json({
    success: false,
    code: err.code ?? ERROR_CODE.INTERNAL_SERVER_ERROR,
    message,
    ...(process.env.NODE_ENV !== "production" && {
      stack: err.stack,
    }),
  });
};

export default globalErrorHandler;
