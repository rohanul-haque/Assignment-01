/**
 * @copyright 2026
 * @author Rohanul Haque Rohan - MERN Stack Developer
 * @license Apache-2.0
 */

/**
 * Thired-party Module
 */

import { StatusCodes } from "http-status-codes";

/**
 * Application Modules
 */
import { logger } from "@/lib/winston";
import { API_MESSAGES } from "@/utils/API_MESSAGES";
import asyncHandler from "@/utils/asyncHandler";
import sendResponse from "@/utils/sendResponse";

/**
 * Application Service
 */
import userService from "@/modules/user/user.service";

/**
 * Type
 */
import type { NextFunction, Request, Response } from "express";

/**
 * Controller for Creating a User
 */
const createUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await userService.createUser(req.body);

    if (result) {
      logger.info(API_MESSAGES.USER_CREATE_SUCCESS, {
        name: result.name,
        email: result.email,
        age: result.age,
      });
    }

    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      success: true,
      message: API_MESSAGES.USER_CREATE_SUCCESS,
      data: result,
    });
  },
);

/**
 * Controler for get all users
 */
const getAllUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await userService.getAllUser();

    if (result) {
      logger.info("Get all users fetched successfully", {
        users: result,
      });
    }

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      data: result || [],
    });
  },
);

/**
 * controller for get user by id
 */
const getUserById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await userService.getUserById(id as string);

  if (result) {
    logger.info("User fetched successfully", {
      user: result,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

/**
 * controller for update user by id
 */
const updateUserById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  await userService.updateUserById({
    id: id as string,
    body: req.body,
  });

  logger.info(API_MESSAGES.USER_UPDATE_SUCCESS, {
    id: id,
  });

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: API_MESSAGES.USER_UPDATE_SUCCESS,
  });
});

/**
 * controller for delete user by id
 */
const deleteUserById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    await userService.deleteUserById(req.params.id as string);

    logger.info(API_MESSAGES.USER_DELETE_SUCCESS, {
      id: req.params.id,
    });

    sendResponse(res, {
      statusCode: StatusCodes.NO_CONTENT,
      success: true,
      message: API_MESSAGES.USER_DELETE_SUCCESS,
    });
  },
);

const userController = {
  createUser,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
};

export default userController;
