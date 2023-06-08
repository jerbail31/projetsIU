function scrollRendezVous(){
    rendezvousShow();
    var elmntToView = document.getElementById("rendezVous");
    elmntToView.scrollIntoView(); 
}
function addBorder(){
    var div = document.getElementById("divLocationHours");
    div.style.borderColor = "red";
    div.style.borderRadius = "25px";
    window.scrollTo(0, 0);

}
$(document).ready(function(){
    //rendez-vous modal
    $('#btnBook').click(function(){
        validateForm();
        document.getElementById('emailConfirm').innerHTML = document.getElementById('inputEmail').value;
        new bootstrap.Modal($('#confirmModal')).show();
    });
    $('#confirmModal').on('hide.bs.modal', function(){
        window.location.href = "index.html";
    });
    //question modal
    $('#btnQuestion').click(function(){
        validateForm();
        new bootstrap.Modal($('#questionModal')).show();
    });
    $('#questionModal').on('hide.bs.modal', function(){
        window.location.href = "index.html";
    });
    //tooltip init
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    //popover
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    });

    $('#locationDiv').click(function(){
        window.open("https://www.google.com/maps/place/SITE,+800+King+Edward+Ave,+Ottawa,+ON+K1N+6N5", '_blank').focus();
    });
});

//Fausse validation
function validateForm(){
    if(document.getElementById('inputEmail').value == ""){
        document.getElementById('inputEmail').value = 'example@email.com'
    }
}

function questionaireShow(){
    document.getElementById('divRendezVous').style.display = 'none';
    document.getElementById('divQuestion').style.display = 'block';
}
function rendezvousShow(){
    document.getElementById('divQuestion').style.display = 'none';
    document.getElementById('divRendezVous').style.display = 'block';
}
function scrollQuestion(){
    questionaireShow();
    var elmntToView = document.getElementById("rendezVous");
    elmntToView.scrollIntoView(); 
}