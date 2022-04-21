


let selectedrating = document.querySelectorAll('.selected-rating');
var ratingchosen = sessionStorage.getItem('ratingchosen');
document.getElementById("selected-rating").innerHTML = "You selected" +" "+ ratingchosen + " /5";
// var newthankyou = "testing";
// selectedrating.innerHTML = newthankyou;
sessionStorage.removeItem('ratingchosen');
console.log(ratingchosen);
