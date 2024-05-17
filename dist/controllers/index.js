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
Object.defineProperty(exports, "__esModule", { value: true });
exports.allUser = exports.getUser = void 0;
const services_1 = require("../services");
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('index');
});
exports.getUser = getUser;
const allUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const { name, Email, Contact } = req.body;
        const result = yield (0, services_1.allUserServices)(user);
        if (result === null || result === void 0 ? void 0 : result.length) {
            return res.status(409).send('already exist  ');
        }
        else {
            try {
                const result2 = yield (0, services_1.allInsertService)(user);
                return res.status(200).send('success');
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: 'Something Went Wrong..' });
            }
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something Went Wrong..' });
    }
});
exports.allUser = allUser;
