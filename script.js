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

// Fonctionnalité 5

let navbar = document.querySelector("header");
navbar.addEventListener("dblclick", function(){
	if (document.styleSheets[0].disabled === false) {
		document.styleSheets[0].disabled = true;
	} else if (document.styleSheets[0].disabled === true) {
		document.styleSheets[0].disabled = false;
	}
})

// Fonctionnalité 6

let cardList = document.querySelectorAll(".col-md-4");

for (let i = 0; i < cardList.length; i++){
	let viewButton = document.querySelectorAll(".btn-success")[i];
	document.querySelectorAll("img.card-img-top")[i].style.width = "100%";
	viewButton.addEventListener("mouseover", function(){
		document.querySelectorAll("p.card-text")[i].classList.toggle("collapse");
		if (document.querySelectorAll("img.card-img-top")[i].style.width === "100%") {
			document.querySelectorAll("img.card-img-top")[i].style.width = "20%";
		} else if (document.querySelectorAll("img.card-img-top")[i].style.width ==="20%") {
			document.querySelectorAll("img.card-img-top")[i].style.width = "100%";
		}
	})
}

