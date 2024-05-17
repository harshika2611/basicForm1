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
const submitBtn = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const form = document.getElementById('form');
        const formData = new FormData(form);
        const serialData = {};
        for (let [key, value] of formData.entries()) {
            if (serialData[key] != undefined) {
                serialData[key] += ',' + value;
            }
            else {
                serialData[key] = value;
            }
        }
        const userValid = userValidation(serialData);
        if (Object.keys(userValid).length > 0) {
            errorShow(userValid);
        }
        else {
            const response = yield fetch('http://localhost:8000/', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(serialData),
            });
            if (response.status == 200) {
                document.getElementById('error').innerHTML = '';
                alert('form submitted');
                document.getElementById('form').reset();
            }
            if (response.status == 409) {
                document.getElementById('error').innerHTML =
                    'user already exist';
                document.getElementById('error').style.color =
                    'red';
            }
            if (response.status === 400) {
                const errorObject = yield response.json();
                errorShow(errorObject);
            }
        }
    }
    catch (error) {
        console.log(error);
    }
});
function errorShow(errorObject) {
    const allSpan = document.querySelectorAll('.errorspan');
    allSpan.forEach((element) => {
        element.remove();
    });
    for (let key in errorObject) {
        const targetElement = document.querySelector(`[name="${key}"]`);
        if (targetElement) {
            const errorSpan = targetElement.nextElementSibling;
            if (errorSpan && errorSpan.classList.contains('errorspan')) {
                errorSpan.textContent = errorObject[key];
            }
            else {
                //errorspan not exist
                const createSpan = document.createElement('span');
                createSpan.textContent = errorObject[key];
                createSpan.setAttribute('class', 'errorspan');
                createSpan.style.color = 'red';
                targetElement.insertAdjacentElement('afterend', createSpan);
            }
        }
    }
    // const allSpans = document.querySelectorAll(".errorspan");
    // allSpans.forEach(span => {
    //   if (!errorObject.hasOwnProperty(span.previousElementSibling.name)) {
    //     span.remove(); // Remove only if the corresponding input has no error
    //   }
    // });
}
