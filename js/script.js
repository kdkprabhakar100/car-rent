function toggleIcons() {
  const icons = document.getElementById("hiddenIcons");
  icons.classList.toggle("active");
}

document.addEventListener("click", (event) => {
  const icons = document.getElementById("hiddenIcons");
  const profile = document.querySelector(".navbar__user-profile");
  if (!profile.contains(event.target) && !icons.contains(event.target)) {
    icons.classList.remove("active");
  }
});

//buttonglow
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".car-card__heart").forEach((button) => {
    button.addEventListener("click", () => {
      const img = button.querySelector("img");
      if (img.src.includes("Vector.png")) {
        img.src = "/assets/icons/filledheart.png";
      } else {
        img.src = "/assets/icons/Vector.png";
      }
    });
  });
});
