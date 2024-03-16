document.addEventListener("DOMContentLoaded", function () {
  var toggleButtons = document.querySelectorAll(".toggleButton");
  var accordionContainers = document.querySelectorAll(".accordion-container");

  toggleButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      accordionContainers.forEach(function (container, containerIndex) {
        var ans = container.querySelector(".accordion-ans");
        var toggleButton = container.querySelector(".toggleButton");

        if (ans) {
          // Close all accordions except the clicked one
          if (index !== containerIndex) {
            ans.style.display = "none";
            toggleButton.src = "assets/images/icon-plus.svg";
          }
          // Toggle the display of the clicked accordion
          else {
            ans.style.display = ans.style.display === "none" ? "block" : "none";
            toggleButton.src =
              ans.style.display === "none"
                ? "assets/images/icon-plus.svg"
                : "assets/images/icon-minus.svg";
          }
        }
      });
    });
  });
});
