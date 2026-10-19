/**
 * @copyright 2026
 * @author Rohanul Haque Rohan - MERN Stack Developer
 * @license Apache-2.0
 */

/**
 * Third-Party Modules
 */
import dotenv from "dotenv";
dotenv.config();

/**
 * Application Configurations
 */
const config = {
  PORT: process.env.PORT || "5000",
  NODE_ENV: process.env.NODE_ENV || "development",
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
  WHITELISTED_ORIGINS: ["", ""],
};

export default config;
