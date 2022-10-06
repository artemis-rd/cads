console.log('%cWelcome to CADS', 'font-size: 2em;color: #5f4bb6')

var card = document.getElementById("card");
function openRegister(){
    card.style.transform = "rotateY(-180deg)"
}

function openLogin(){
    console.log("clicked")
    card.style.transform = "rotateY(0deg)"
}
