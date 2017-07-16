// var weaponsList = ["Ak-47", "Gun", "Nachete", "Knife"];
// var contries = ["Korea", "Japan", "Greece", "Colombia"];
//
// var soldier = {
//   name: "Nicolas",
//   weapon: weaponsList[2],
//   contry: contries[3],
//   isDead: false,
//   shoot: function() {
//     console.log("Pew pew pew");
//   },
//   sayHi: function(sargent) {
//     console.log("Hello " + sargent + " my name is " + this.name);
//   }
// };

// function  nameOfTheFunction(arguments) {
//   instructions
// }

// function multiply(chicken, potato) {
//   return chicken * potato
// }
//
// function division(lala, lolo) {
//   return lala / lolo
// }

// var age = prompt("How old are you?");
//
// if (age < 18) {
//   console.log("You can't drink");
// } if else (age > 18 && age < 45) {
//   console.log("You're and adult");
// } else {
//   console.log("You are getting old");
// }


$(document).ready(function() {
  var $heart = $(".heart");
  $heart.click(function() {
    $(this).toggleClass("fa-heart-o")
    $(this).toggleClass("fa-heart heart-click");
  });

  var $comment = $(".comment");
  $comment.click(function() {
    $(this).toggleClass("fa-comment-o")
    $(this).toggleClass("fa-comment comment-click")
  });
});
