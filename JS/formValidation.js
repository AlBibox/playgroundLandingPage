const mailInput = document.getElementById("mailInput");
const textarea = document.getElementById("textareaMessage");

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validation = () => {
    if (!validateEmail(mailInput.value)){
        mailInput.classList.add("error");
        mailInput.value = "";
        mailInput.placeholder = "Enter a valid mail";
        
        if (!textarea.value) {
            textarea.classList.add("error");
            textarea.value = "";
            textarea.placeholder = "Enter a valid message";
        }
        return false;  
    }   
      if (!textarea.value) {
        textarea.classList.add("error");
        textarea.value = "";
        textarea.placeholder = "Enter a valid message";
        return false;
    }
    return true;
}


mailInput.addEventListener("keydown", () => {
    mailInput.classList.remove("error");
    mailInput.placeholder = "Email";
});

textarea.addEventListener("keydown", () => {
    textarea.classList.remove("error");
    textarea.placeholder = "Message";
});