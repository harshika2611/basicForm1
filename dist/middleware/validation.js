"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationb = void 0;
function userValidationb(req, res, next) {
    const userdata = req.body;
    let userError = {};
    const regextext = /^[a-zA-Z\\s]+$/;
    console.log(userdata, 'all');
    for (let key in userdata) {
        switch (key) {
            case 'name':
                if (userdata[key] === '') {
                    userError[key] = '* require';
                }
                else if (!regextext.test(userdata[key]) && userdata[key] !== '') {
                    userError[key] = '* Please valid Firstname';
                }
                else if (userdata[key].trim().length === 0 && userdata[key] !== '') {
                    userError[key] = '* Please Enter Firstname';
                }
                else if (userdata[key].trim().length < 3 && userdata[key] !== '') {
                    userError[key] = '* Please valid firstname';
                }
                else if (userdata[key].trim().length > 45 && userdata[key] !== '') {
                    userError[key] = '* Please valid firstname';
                }
                else {
                    delete userError[key];
                }
                break;
            case 'Email':
                const regexemail = /^(?!.{255})[a-z0-9-_.+]+@[a-z0-9]+[a-z0-9-.]*\.[a-z0-9]{2,9}/;
                if (userdata[key].trim().length === 0) {
                    userError[key] = '* require';
                }
                else if (!regexemail.test(userdata[key]) && userdata[key] !== '') {
                    userError[key] = '* Please Enter Valid Email';
                }
                else {
                    delete userError[key];
                }
                break;
            case 'Contact':
                const regexCon = /^[0-9]+$/;
                if (userdata[key].trim().length === 0) {
                    userError[key] = '* require';
                }
                else if (!regexCon.test(userdata[key]) && userdata[key] !== '') {
                    userError[key] = '* Please Enter Valid Email';
                }
                else {
                    delete userError[key];
                }
                break;
        }
    }
    if (Object.keys(userError).length === 0) {
        next();
    }
    else {
        return res.status(400).json(userError);
    }
}
exports.userValidationb = userValidationb;
