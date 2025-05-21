function toggleIcons() {
  // Only toggle on mobile
  if (window.innerWidth <= 768) {
    const dropdown = document.getElementById("mobileIconsDropdown");
    dropdown.classList.toggle("active");
  }
}
