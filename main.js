function copyFunction(btnId, inputId) {
  
    document.getElementById(btnId).innerHTML = "Copied!";
     var copyText = document.getElementById(inputId);
     copyText.select(); 
     navigator.clipboard.writeText(copyText.value);
   }
   