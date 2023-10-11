document.getElementById("useremail").innerHTML = localStorage.getItem("userEmail") + "!";
    
function goback(){
    location.replace("index.html")
    localStorage.removeItem("userEmail");
}

  
  
