//define functions here

$(document).ready(function(){

$('h1').on("eventname", function(){
    //action you want taken
});

})


function getIt () {
  $('p').on("click", function (){
    alert("Hey!")
    })
}

function frameIt () {
  $('img').on('load', function(){
    $('img').addClass("tasty")
  })
}

function pressIt () {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.")
    return;
  })
}