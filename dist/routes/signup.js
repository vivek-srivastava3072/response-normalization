"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const request_validation_error_1 = require("../errors/request-validation-error");
const database_connection_error_1 = require("../errors/database-connection-error");
const router = express_1.default.Router();
exports.signUpRouter = router;
router.post("/api/users/signup", [
    (0, express_validator_1.body)("email").isEmail().withMessage("Email must be valid"),
    (0, express_validator_1.body)("password")
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage("Password must be 4 to 20 characters long"),
], (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        throw new request_validation_error_1.RequestValidationError(errors.array());
    }
    const { email, password } = req.body;
    console.log("Creating user...");
    if (1)
        throw new database_connection_error_1.DatabaseConnectionError();
    res.status(201).send({ message: "User signed up successfully", email });
});
