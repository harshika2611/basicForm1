const submitBtn = async () => {
  try {
    const form = document.getElementById('form') as HTMLFormElement;
    const formData = new FormData(form);
    const serialData: { [key: string]: string } = {};
    for (let [key, value] of formData.entries()) {
      if (serialData[key] != undefined) {
        serialData[key] += ',' + value;
      } else {
        serialData[key] = value as string;
      }
    }
    const userValid = userValidation(serialData);
    if (Object.keys(userValid).length > 0) {
      errorShow(userValid);
    } else {
      const response = await fetch('http://localhost:8000/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(serialData),
      });
      if (response.status == 200) {
        (document.getElementById('error') as HTMLDivElement).innerHTML = '';
        alert('form submitted');
        (document.getElementById('form') as HTMLFormElement).reset();
      }
      if (response.status == 409) {
        (document.getElementById('error') as HTMLDivElement).innerHTML =
          'user already exist';
        (document.getElementById('error') as HTMLDivElement).style.color =
          'red';
      }
      if (response.status === 400) {
        const errorObject = await response.json();
        errorShow(errorObject);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

function errorShow(errorObject: { [key: string]: string }) {
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
      } else {
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
