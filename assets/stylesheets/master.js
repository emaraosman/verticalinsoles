
// SLIDESHOW FUNCTIONALITY
  // var slideIndex=1;
  // showDivs(slideIndex);
  //
  // function plusDivs(n){
  //   showDivs(slideIndex += n);
  // }
  //
  // function showDivs(n){
  //   var i;
  //   var x= document.getElementsByClassName("slides");
  //   if(n>x.length) {slideIndex=1}
  //   if(n<1){slideIndex = x.length}
  //   for(i=0;i<x.length;i++) {
  //   x[i].style.display = "none";
  //   }
  //   x[slideIndex-1].style.display = "block";
  // }

  // document.getElementById('banner').innerHTML= "yo";



  var slideIndex = 0;
  slideShow();

  function slideShow() {
      var x = document.getElementsByClassName("slides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > x.length) {slideIndex = 1}
      x[slideIndex-1].style.display = "block";
      setTimeout(slideShow, 2000);
  }


  // //TEXT SLIDE SHOW BELOW
  //
  // var textSlideIndex = 0;
  // textShow();
  //
  // function textShow() {
  //     var textSlides = ["hi","there"]
  //
  //     var x = document.getElementsByClassName("redSlides");
  //     for (i = 0; i < x.length; i++) {
  //       x[i].style.display = "none";
  //     }
  //     textSlideIndex++;
  //     if (textSlideIndex > x.length) {textSlideIndex = 1}
  //     x[textSlideIndex-1].innerHTML.redSlides[i];
  //     setTimeout(textShow, 2000);
  // }


//Function to load content in slowly from low opacity
function slowLoad() {
  document.getElementsByTagName('this')()
}


$(document).ready(function(){
  $("h1").css({"opacity":"1", "transition":"3.5s"});
});



// $(document).ready(function(){
//   $(".breaker-text").text("HI IM jquery")
// });
