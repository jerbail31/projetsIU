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
$(document).ready(function(){
    $('#btnBook').click(function(){
        validateForm();
        document.getElementById('emailConfirm').innerHTML = document.getElementById('inputEmail').value;
        new bootstrap.Modal($('#confirmModal')).show();
    });
    $('#confirmModal').on('hide.bs.modal', function(){
        window.location.href = "index.html";
    })
});

//Fausse validation
function validateForm(){
    if(document.getElementById('inputEmail').value == ""){
        document.getElementById('inputEmail').value = 'example@email.com'
    }
}