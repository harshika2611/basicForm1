"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allInsertService = exports.allUserServices = void 0;
const config_1 = __importDefault(require("../config/config"));
const allUserServices = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sql0 = `select email from registration where email=?`;
        const [result] = yield config_1.default.execute(sql0, [user.Email]);
        return result;
    }
    catch (error) {
        console.log(error);
    }
});
exports.allUserServices = allUserServices;
const allInsertService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, Email, Contact } = user;
        const sql1 = `insert into registration(\`name\`,email,contact) 
        values
        (?,?,?);`;
        const [ans] = yield config_1.default.execute(sql1, [name, Email, Contact]);
    }
    catch (error) {
        console.log(error);
    }
});
exports.allInsertService = allInsertService;
