// SLIDESHOW FUNCTIONALITY

  var slideIndex = 0;

  function slideShow() {
      var a = document.getElementsByClassName("slides");
      for (i = 0; i < a.length; i++) {
        a[i].style.display = "none";
      }

      slideIndex++;

      if (slideIndex > a.length) {
        slideIndex = 1
      }

      a[slideIndex-1].style.display = "block";

      setTimeout(slideShow, 2500);
  }
slideShow();

//Fade in for h1 tags on pages
$(document).ready(function(){
  $("h1").css({"opacity":"1", "transition":"3.5s"});
});


//jQuery test
// $(document).ready(function(){
//   $(".breaker-text").text("HI IM jquery")
// });
