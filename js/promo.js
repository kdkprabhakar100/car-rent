document.addEventListener("DOMContentLoaded", function () {
  const desktopPromo = document.getElementById("desktopPromo");

  function checkScreenSize() {
    if (window.innerWidth > 960) {
      desktopPromo.style.display = "flex";
    } else {
      desktopPromo.style.display = "none";
    }
  }

  // Check on load
  checkScreenSize();

  // Check when window is resized
  window.addEventListener("resize", checkScreenSize);
});
