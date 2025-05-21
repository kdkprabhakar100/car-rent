function toggleIcons() {
  const icons = document.getElementById("hiddenIcons");
  icons.classList.toggle("active");
}

// Close the icons if clicked outside
document.addEventListener("click", function (event) {
  const icons = document.getElementById("hiddenIcons");
  const profile = document.querySelector(".navbar__user-profile");

  // If icons are open and the clicked target is not inside icons or profile
  if (
    icons.classList.contains("active") &&
    !icons.contains(event.target) &&
    !profile.contains(event.target)
  ) {
    icons.classList.remove("active");
  }
});
