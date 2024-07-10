const form=document.querySelector('#form');
const username=document.querySelector('#userName');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');
form.addEventListener('submit',(e)=>{
e.preventDefault();
validateInputs();
});
function validateInputs(){
const  usernamevalue=username.value.trim();
const emailvalue=email.value.trim();
const passwordvalue=password.value.trim();
const cpasswordvalue=cpassword.value.trim();
if(usernamevalue===''){
setError(username,'user name is required');
}
else{
      setSuccess(username);
}
if(emailvalue===''){   
     setError(email,'Email is required');
}
else if(!validateEmail(emailvalue))
{
setError(email,'Enter a valid email');
}
else{
setSuccess(email);
}
 if(passwordvalue===''){
   setError(password,'Password is required');
}
else if(passwordvalue.length< 8){
 setError(password,'Password should be atleast 8 characters');
}
else{
   setSuccess(password);
 }
 if(cpasswordvalue===''){
     setError(cpassword,'confirm password is required');
 }
 else if(cpasswordvalue!==passwordvalue){
    setError(cpassword,'password doesnot match');
 }
else{
    setSuccess(cpassword);
}
 }
function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')
    errorElement.innerText=message;
    inputGroup.classList.add('errors');
     inputGroup.classList.remove('success');
 }
function setSuccess(element){
   const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')
    errorElement.innerText='';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('errors');
 }
 const validateEmail=(email)=>{
   return String(email).toLowerCase().match( /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/);

}