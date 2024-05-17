function userValidation(data: { [key: string]: string }) {
  let userError: { [key: string]: any } = {};
  const regextext = /^[a-zA-Z\\s]+$/;
  console.log(data, 'all');
  for (let key in data) {
    switch (key) {
      case 'name':
        if (data[key] === '') {
          userError[key] = '* require';
        } else if (!regextext.test(data[key]) && data[key] !== '') {
          userError[key] = '* Please valid Firstname';
        } else if (data[key].trim().length === 0 && data[key] !== '') {
          userError[key] = '* Please Enter Firstname';
        } else if (data[key].trim().length < 3 && data[key] !== '') {
          userError[key] = '* Please valid firstname';
        } else if (data[key].trim().length > 45 && data[key] !== '') {
          userError[key] = '* Please valid firstname';
        } else {
          delete userError[key];
        }
        break;
      case 'Email':
        const regexemail =
          /^(?!.{255})[a-z0-9-_.+]+@[a-z0-9]+[a-z0-9-.]*\.[a-z0-9]{2,9}/;

        if (data[key].trim().length === 0) {
          userError[key] = '* require';
        } else if (!regexemail.test(data[key]) && data[key] !== '') {
          userError[key] = '* Please Enter Valid Email';
        } else {
          delete userError[key];
        }
        break;
      case 'Contact':
        const regexCon = /^[0-9]+$/;
        if (data[key].trim().length === 0) {
          userError[key] = '* require';
        } else if (!regexCon.test(data[key]) && data[key] !== '') {
          userError[key] = '* Please Enter Valid Email';
        } else {
          delete userError[key];
        }
        break;
    }
  }
  return userError;
}
