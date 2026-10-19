/**
 * @copyright 2026
 * @author Rohanul Haque Rohan - MERN Stack Developer
 * @license Apache-2.0
 */

/**
 * User create interface
 */
export interface ICreateUserPayload {
  name: string;
  email: string;
  age: number;
}

/**
 * User login interface
 */
export type ILoginPayload = Pick<ICreateUserPayload, "email">;

/**
 * User response interface
 */
export interface IUserResponse extends ICreateUserPayload {
  id: string;
}

/**
 * User update interface
 */
export interface IUpdateUserPayload {
  id: string;
  body: Partial<Pick<ICreateUserPayload, "name" | "age">>;
}
