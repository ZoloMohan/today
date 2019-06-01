var darkswitch = document.querySelector("#darkswitch");
var body = document.querySelector("body");
var nav = document.querySelector(".navbar")
var header = document.querySelector("h2");
var lead = document.querySelector(".lead");
var currentColor = 0;
darkswitch.addEventListener("click", function(){
    if(!currentColor){
        body.style.backgroundColor = "#000000"; 
        nav.classList.remove("navbar-light");
        nav.classList.add("navbar-dark");
        header.style.color="white";
        lead.style.color="white";
        currentColor = 1;
    }
    else{
        body.style.backgroundColor = "white";
        nav.classList.remove("navbar-dark");
        nav.classList.add("navbar-light");
        header.style.color="darkslategray"; 
        lead.style.color="darkslategray";

        currentColor = 0;
    }
    console.log("hdjkshfjkds");
});