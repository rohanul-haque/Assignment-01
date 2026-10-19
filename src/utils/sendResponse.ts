/**
 * @copyright 2026
 * @author Rohanul Haque Rohan - MERN Stack Developer
 * @license Apache-2.0
 */

/**
 * Type
 */
import type { Response } from "express";

/**
 * Type for response data
 * @param { number } statusCode - The HTTP status code
 * @param { boolean } success - The success status
 * @param { string } message - The response message
 * @param { T } data - The response data
 */
interface ResponseSchema<T> {
  statusCode: number;
  success: boolean;
  message?: string;
  data?: T;
}

/**
 * Send Response
 * @param res - Response object
 * @param response - Response data
 */
const sendResponse = <T>(res: Response, response: ResponseSchema<T>): void => {
  const { statusCode, success, message, data } = response;

  res.status(statusCode).json({
    success,
    ...(message && { message }),
    ...(data !== undefined && { data }),
  });
};

export default sendResponse;
