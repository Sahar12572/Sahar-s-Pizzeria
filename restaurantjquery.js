$(document).ready(function () {
  alert("Welcome to Sahar's Pizzeria & Pasta House");

  // Set background to always be black
  $("body").css("background-color", "black");
  $(".paragraph1").css("color", "white");

  // Fade in all headings
  $(".headings").hide().fadeIn("slow");

  // Dropdown Menu Animation
  $(".menu-item").hover(
    function () {
      $(this).find(".dropdown").stop().slideDown("slow");
    },
    function () {
      $(this).find(".dropdown").stop().slideUp("slow");
    }
  );

  // 🔁 Animation control flags
  let animateRunning = true;

  // ⚠️ Recursive background animation removed — we’ll keep it black
  // If you still want subtle animation, use CSS transitions instead

  // Move Elements Back and Forth — but only if animation is running
  function animateElements() {
    if (!animateRunning) return;

    $(".container, h1, h2, p, .menu")
      .animate({ marginLeft: "50px" }, 800)
      .animate({ marginLeft: "-50px" }, 800)
      .animate({ marginLeft: "0px" }, 800, animateElements);
  }
  animateElements(); // Start loop

  // Image Fade In/Out
  $("#fadeInBtn").click(function () {
    $("#image").fadeIn(3000);
  });

  $("#fadeOutBtn").click(function () {
    $("#image").fadeOut(3000);
  });

  // Stop all animations
  $("#stopAnimationBtn").click(function () {
    animateRunning = false;
    $("*").stop(true, true); // Stop EVERYTHING gracefully
  });

  // Fade out clicked elements (but exclude important ones!)
  $(document).on("click", "*", function (event) {
    if (!$(this).is("button, #stopAnimationBtn, .menu, .menu *, h1, h2, nav")) {
      $(this).fadeOut(500);
    }
    event.stopPropagation();
  });
});
