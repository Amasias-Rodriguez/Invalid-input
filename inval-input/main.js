function validateInput(){
  let inputField = document.getElementById("inputField");
  let inputValue = inputField.value.trim();
  let errorMessage = document.getElementById("errorMessage");

  //adding validation

  if(inputValue === ""){
    inputField.classList.add("shake");
    errorMessage.style.visibility = "visible";

    // removing shake class hidding error

    setTimeout(function() {
      inputField.classList.remove("shake");
      errorMessage.style.visibility  = "hidden";
    }, 500);
  }
  else{
    //validating input
    alert("Valid input");
  }
}