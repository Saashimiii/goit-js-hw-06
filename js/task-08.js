const form = document.querySelector(".login-form");


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
   
    if (email.value.trim() === "" || password.value.trim() === "") {
          
        return alert("Шановний(а), будь ласка, обов'язково заповніть всі поля!");
    } else {
         const userData = {
            [email.name]: event.currentTarget.elements.email.value.trim(),
            [password.name]: event.currentTarget.elements.password.value.trim(),  
         };
        console.log(userData);
         
            
    }
    
      
    
}
