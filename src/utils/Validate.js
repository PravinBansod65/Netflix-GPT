const CheckValidData = (name, email, password) => {
    let isNameValid;
    if(name){
         isNameValid = /^[A-Za-z\s]+$/.test(name);
    }
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

  if (name) {
    if (!isNameValid) return "Name is not valid";
  }
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password* is not valid"; 

  return null;
};

export default CheckValidData;
