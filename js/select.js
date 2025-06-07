document.addEventListener("DOMContentLoaded", function () {
  function modifySelectOptions() {
    if (window.innerWidth >= 1200) {
      const boxes = document.querySelectorAll(".pickup-box, .dropoff-box");

      boxes.forEach((box) => {
        const selects = box.querySelectorAll(".field select");
        if (selects[0])
          selects[0].querySelector("option").textContent = "Select your city";
        if (selects[1])
          selects[1].querySelector("option").textContent = "Select your date";
        if (selects[2])
          selects[2].querySelector("option").textContent = "Select your time";
      });
    }
  }

  modifySelectOptions();

  window.addEventListener("resize", modifySelectOptions);
});
