function toggleIcons() {
  const icons = document.getElementById("hiddenIcons");
  icons.classList.toggle("active");
}

document.addEventListener("click", function (event) {
  const icons = document.getElementById("hiddenIcons");
  const profile = document.querySelector(".navbar__user-profile");

  if (!profile.contains(event.target) && !icons.contains(event.target)) {
    icons.classList.remove("active");
  }
});
