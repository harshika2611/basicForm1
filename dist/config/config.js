"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const data = promise_1.default.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Mysql@2611',
    database: 'advance-form1',
    dateStrings: true,
    multipleStatements: true,
});
// data.getConnection((err: string) => {
//   if (!err) {
//     console.log('connected..');
//   } else {
//     console.log('Error In Database Connection: ' + err);
//   }
// });
exports.default = data;
