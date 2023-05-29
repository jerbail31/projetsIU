function scrollRendezVous(){
    var elmntToView = document.getElementById("rendezVous");
    elmntToView.scrollIntoView(); 
}
function addBorder(){
    var div = document.getElementById("divLocationHours");
    div.style.border = "solid 3px red";
    div.style.borderRadius = "25px";
    
    return false;
}