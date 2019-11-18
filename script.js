// Fonctionnalités 1 et 1 bis

var footerEl = document.querySelector("footer");
let counter = 0;
footerEl.addEventListener("click", function(){
	console.log("clique");
})
footerEl.addEventListener("click", function(){
    counter += 1;
    console.log("clic numéro " + counter);
})

// Fonctionnalité 2

let navbarHamburger = document.querySelector(".navbar-toggler");
navbarHamburger.addEventListener("click", function(){
	document.getElementById("navbarHeader").classList.toggle("collapse");
})

// Fonctionnalité 3

let editButton1 = document.querySelector(".btn-outline-secondary");
editButton1.addEventListener("click", function(){
	document.querySelector(".card").style.color = "red";
})

// Fonctionnalité 4

let editButton2 = document.querySelectorAll(".btn-outline-secondary")[1];
let secondCard = document.querySelectorAll(".card")[1];
editButton2.addEventListener("click", function(){
	if (secondCard.style.color === "") {
		secondCard.style.color = "green";
	} else if (secondCard.style.color === "green") {
		secondCard.style.color = "";
	}
})
