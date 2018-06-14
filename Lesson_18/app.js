(function() {
  var box = document.querySelector(".box-animated-listener");

  box.addEventListener("mouseenter", function() {
    box.classList.add("active");
  });

  box.addEventListener("animationend", function(e) {
    box.classList.remove("active");
  });
})();
