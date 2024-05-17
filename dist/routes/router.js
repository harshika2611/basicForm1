"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const index_1 = require("../controllers/index");
const validation_1 = require("../middleware/validation");
router.get('/', index_1.getUser);
router.post('/', validation_1.userValidationb, index_1.allUser);
exports.default = router;
