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

//fonctionnalité 2
