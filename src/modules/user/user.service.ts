/**
 * @copyright 2026
 * @author Rohanul Haque Rohan - MERN Stack Developer
 * @license Apache-2.0
 */

/**
 * Third-party Module
 */
import { StatusCodes } from "http-status-codes";

/**
 * Application Modules
 */
import { prisma } from "@/lib/prisma";
import { API_MESSAGES } from "@/utils/API_MESSAGES";
import AppError from "@/utils/appError";
import { ERROR_CODE } from "@/utils/ERROR_CODE";

/**
 * Type
 */
import { logger } from "@/lib/winston";
import type {
  ICreateUserPayload,
  IUpdateUserPayload,
  IUserResponse,
} from "@/modules/user/user.interface";

/**
 * Create User Service
 * @param payload - User payload
 * @returns {Promise<AuthResponse>}
 */
const createUser = async (
  payload: ICreateUserPayload,
): Promise<IUserResponse> => {
  const { name, email, age } = payload;

  // Check if all fields are required
  if (!name || !email || !age) {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      ERROR_CODE.VALIDATION_ERROR,
      API_MESSAGES.ALL_FIELDS_REQUIRED,
    );
  }

  // Check if user with the same email already exists
  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    logger.warn(API_MESSAGES.EMAIL_ALREADY_EXISTS, {
      email,
    });
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      ERROR_CODE.AUTH_EMAIL_EXISTS,
      API_MESSAGES.EMAIL_ALREADY_EXISTS,
    );
  }

  // Create new user
  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      age: age,
    },
  });

  return newUser;
};

/**
 * Get All Users Service
 * @returns {Promise<AuthResponse[]>}
 */
const getAllUser = async (): Promise<IUserResponse[]> => {
  // Get all users
  const users = await prisma.user.findMany({});

  return users;
};

const getUserById = async (id: string): Promise<IUserResponse> => {
  // Check if user ID is required
  if (!id) {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      ERROR_CODE.VALIDATION_ERROR,
      "User ID is required",
    );
  }

  // Find user by ID
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  // Check if user with the same ID already exists
  if (!user) {
    logger.warn(API_MESSAGES.USER_NOT_FOUND, {
      id,
    });

    throw new AppError(
      StatusCodes.NOT_FOUND,
      ERROR_CODE.USER_NOT_FOUND,
      API_MESSAGES.USER_NOT_FOUND,
    );
  }

  return user;
};

/**
 * Update User By ID Service
 * @param payload - User ID and updated data
 * @returns {Promise<void>}
 */
const updateUserById = async ({
  id,
  body,
}: IUpdateUserPayload): Promise<void> => {
  const { name, age } = body;

  // Check if user ID is required
  if (!id) {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      ERROR_CODE.VALIDATION_ERROR,
      "User ID is required",
    );
  }

  // Check if user with the same ID already exists
  const existingUser = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  // Check if user with the same ID already exists
  if (!existingUser) {
    logger.warn(API_MESSAGES.USER_NOT_FOUND, {
      id,
    });
    throw new AppError(
      StatusCodes.NOT_FOUND,
      ERROR_CODE.USER_NOT_FOUND,
      API_MESSAGES.USER_NOT_FOUND,
    );
  }

  // Update user
  await prisma.user.update({
    where: {
      id: id,
    },
    data: body,
  });
};

/**
 * Delete User By ID Service
 * @param payload - User ID
 * @returns {Promise<void>}
 */
const deleteUserById = async (id: string): Promise<void> => {
  // Check if user ID is required
  if (!id) {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      ERROR_CODE.VALIDATION_ERROR,
      "User ID is required",
    );
  }

  // Check if user with the same ID already exists
  const existingUser = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  // Check if user with the same ID already exists
  if (!existingUser) {
    logger.warn(API_MESSAGES.USER_NOT_FOUND, {
      id,
    });
    throw new AppError(
      StatusCodes.NOT_FOUND,
      ERROR_CODE.USER_NOT_FOUND,
      API_MESSAGES.USER_NOT_FOUND,
    );
  }

  await prisma.user.delete({
    where: {
      id: id,
    },
  });
};

const userService = {
  createUser,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
};

export default userService;
