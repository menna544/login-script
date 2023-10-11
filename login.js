document.getElementById("useremail").innerHTML = localStorage.getItem("userEmail") + "!";
function goback(){ 
    localStorage.removeItem("userEmail"); 
    window.location.href="index.html"; 
}

  
  
