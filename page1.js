// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var tablinks = document.querySelectorAll("div.tablinks");

for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].onclick = function(e) {
        openForm(e.target.getAttribute('data-form-id'), e.target.getAttribute('id'));
    }
}

function openForm(formid, tabid) {
    var tabcontent = document.querySelectorAll("div.tabcontent");
    var links = document.querySelectorAll("div.tablinks");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(formid).style.display = "block";
    document.getElementById(tabid).classList.add("active");

}
document.getElementById("logintab").click();
function validation()  
{  
    var id=document.f1.user.value;  
    var ps=document.f1.pass.value;  
    if(id.length=="" && ps.length=="") {  
        alert("User name and Password fields are empty");  
        return false;  
    }  
    else  
    {  
        if(id.length=="") {  
            alert("User name is empty");  
            return false;  
        }   
        if (ps.length=="") {  
        alert("Password field is empty");  
        return false;  
        }  
    }                             
}  
document.getElementById("sign uptab").click();
function validation2()  
{  
    var id=document.f2.email1.value;  
    var ps1=document.f2.pass1.value; 
    var ps2=document.f2.pass2.value; 
    var us=document.f2.user1.value;
    if(id.length=="" && ps1.length=="" && ps2.length=="" && us.length=="" ) {  
        alert("fill you information");  
        return false;  
    }  
    else  
    {  
        if(id.length=="") {  
            alert("Email is empty");  
            return false;  
        }   
        if (ps1.length=="") {  
        alert("Password field is empty");  
        return false;  
        }  
        if (ps2.length=="") {  
            alert("confirme your password");  
            return false;  
        }
        if (us.length=="") {  
            alert("User field is empty");  
            return false;  
            }    
    }                             
}