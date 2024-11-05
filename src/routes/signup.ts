import express from "express";
import { body, validationResult } from "express-validator";
import { Request, Response } from "express";
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be 4 to 20 characters long"),
  ],
  (req: Request, res: Response): any => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    const { email, password } = req.body;
    console.log("Creating user...");
    if (1) throw new DatabaseConnectionError();

    res.status(201).send({ message: "User signed up successfully", email });
  }
);

export { router as signUpRouter };
