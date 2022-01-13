var formInput = document.getElementById("form-input"),
    formBtn = document.getElementById("form-btn")

formBtn.addEventListener("click", ()=>{
    var inputName = formInput.value

    if (inputName !== ""){
        alert("Thank you! \nEmail has been submitted.")
    }else{
        alert("Please enter your email address!")
    }
})