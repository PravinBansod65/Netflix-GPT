
const CheckValidData = ( email, password) =>{
 const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
//  const isNameValid = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
 const isPasswordValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

//  if(!isPasswordValid) return "Name is not valid";
 if(!isEmailValid) return "Email is not valid";
 if(!isPasswordValid) return "Password* is not valid";

 return null;
}




export default CheckValidData;