const form = document.querySelector('#create-account');
const emailInput = document.querySelector('#email');
const usernameInput = document.querySelector('#username')
const numberInput = document.querySelector('#number');

form.addEventListener('submit',(e)=>{
   

    validateInputs();

    if (isFormValid() == true){
        form.submit();
      }else{
          e.preventDefault();
      }
})


function isFormValid() {
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true
    inputContainers.forEach(container => {
        if (container.classList.contains('error')){
            result = false;
           }
    });
    return result
}




function validateInputs(){
    if (usernameInput.value.trim() == '') {
        setErrorFor(usernameInput , 'This field is required')
    }else if(usernameInput.value.trim().length < 5 || usernameInput.value.trim().length > 15){
        setErrorFor(usernameInput , 'Name Cannot Be less than 5 and max 15')
    }
    else{
      setSucessFor(usernameInput)
    }
    

    if (emailInput.value.trim().length == "") {
        setErrorFor(emailInput, 'Field cannot be empty')
    }else if (isEmailValid(emailInput.value)) {
        setSucessFor(emailInput);
    } else {
        setErrorFor(emailInput , 'Provide valid email address');
    }


    if (numberInput.value.trim().length == "") {
        setErrorFor(numberInput, 'Field cannot be empty')
    }else if(numberInput.value.trim().length == 13 ||numberInput.value.trim().length == 11 ){
        setSucessFor(numberInput);
    }
    else {
        setErrorFor(numberInput, 'Phone number invalid');
    }



}
function setSucessFor(element){
    const parent = element.parentElement;
    if (parent.classList.contains('error')){
       parent.classList.remove('error');
   }
    parent.classList.add('sucess');
}

function setErrorFor(element , errorMessage){
    const parent = element.parentElement;

    if (parent.classList.contains('sucess')){
        parent.classList.remove('sucess');
    }

    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}



function isEmailValid(email){
    const reg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email);
 }


 