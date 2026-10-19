/**
 * @copyright 2026
 * @author Rohanul Haque Rohan - MERN Stack Developer
 * @license Apache-2.0
 */

/**
 * API Response Messages
 */
export const API_MESSAGES = {
  TOKEN_EXPIRED: "Authentication token has expired",
  TOKEN_INVALID: "Authentication token is invalid",
  INTERNAL_SERVER_ERROR: "Internal server error",
  NOT_FOUND: "Resource not found",
  ROUTE_NOT_FOUND: "The requested route was not found",
  ALL_FIELDS_REQUIRED: "All fields are required",
  EMAIL_ALREADY_EXISTS: "Email already exists",
  USER_CREATE_SUCCESS: "User created successfully",
  USER_LOGIN_SUCCESS: "User logged in successfully",
  USER_NOT_FOUND: "User not found",
  USER_UPDATE_SUCCESS: "User updated successfully",
  USER_DELETE_SUCCESS: "User deleted successfully",
} as const;
