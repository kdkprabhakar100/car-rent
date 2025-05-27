document.addEventListener("DOMContentLoaded", function () {
  function modifySelectOptions() {
    if (window.innerWidth <= 600) {
      const boxes = document.querySelectorAll(".pickup-box, .dropoff-box");

      boxes.forEach((box) => {
        const selects = box.querySelectorAll(".field select");
        if (selects[0])
          selects[0].querySelector("option").textContent = "Location";
        if (selects[1]) selects[1].querySelector("option").textContent = "Date";
        if (selects[2]) selects[2].querySelector("option").textContent = "Time";
      });
    }
  }

  modifySelectOptions();

  window.addEventListener("resize", modifySelectOptions);
});
