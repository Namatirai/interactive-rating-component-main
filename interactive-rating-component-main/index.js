let click = document.querySelectorAll('.ratings');

let ratingvalue;
// console.log(click.length);
 // let rating = document.querySelectorAll('.ratings').innerHTML;
 let thankyou = document.querySelectorAll('thankyou-text');

for (var i = 0; i < click.length; i++) {
  click[i].addEventListener('click',function(){
//the rating of the button
var ratingchosen = this.value;
sessionStorage.setItem("ratingchosen",ratingchosen);

    // console.log(ratingchosen);

  });
}


function activebutton(ratingvalue){
  var activebutton = document.querySelector("." + ratingvalue);
  activebutton.classList.add("active");
  setTimeout()
}
