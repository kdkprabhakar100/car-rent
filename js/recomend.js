const recomendCars = [
  {
    id: 1,
    model: "AllNewRush",
    type: "SUV",
    image: "/assets/recomendation/10.png",
    fuel: "70L",
    transmission: "Manual",
    capacity: "6 people",
    currentprice: "$72.00",
    originalprice: "80.00",
  },
  {
    id: 2,
    model: "CR - V",
    type: "SUV",
    image: "/assets/recomendation/11.png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 people",
    currentprice: "$80.00",
    originalprice: "",
  },
  {
    id: 3,
    model: "AllNewTeriosigegg",
    type: "Sedan",
    image: "/assets/recomendation/12.png",
    fuel: "90L",
    transmission: "Manual",
    capacity: "4 people",
    currentprice: "$96.00",
    originalprice: "",
  },
  {
    id: 4,
    model: "CR - V",
    type: "SUV",
    image: "/assets/recomendation/13.png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 people",
    currentprice: "$80.00",
    originalprice: "",
  },
  {
    id: 5,
    model: "MG ZX Exclusive",
    type: "Hatchback",
    image: "/assets/recomendation/14.png",
    fuel: "70L",
    transmission: "Manual",
    capacity: "4 People",
    currentprice: "$76.00",
    originalprice: "$80.00",
  },
  {
    id: 6,
    model: "New MG ZS",
    type: "SUV",
    image: "/assets/recomendation/15.png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 People",
    currentprice: "$80.00",
    originalprice: "",
  },
  {
    id: 7,
    model: "MG ZX Excite",
    type: "Hatchback",
    image: "/assets/recomendation/16.png",
    fuel: "90L",
    transmission: "Manual",
    capacity: "4 people",
    currentprice: "$74.00",
    originalprice: "",
  },
  {
    id: 8,
    model: "New MG ZS",
    type: "SUV",
    image: "/assets/recomendation/17.png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 people",
    currentprice: "$80.00",
    originalprice: "",
  },
];

const recomendGrid = document.getElementById("recomendationCar");
const recomendCarsHTML = recomendCars
  .map(
    (car) => `
    <article class="car-card__main">
      <div class="car-card__headerr">
        <div class="car-card__left">
          <h3 class="car-card__modelr">${car.model}</h3>
          <p class="car-card__typer">${car.type}</p>
        </div>
        <button class="car-card__heartr" aria-label="Add to favorites">
          <img src="/assets/icons/Vector.png" alt="favourite" />
        </button>
      </div>

      <div class="car-card__flex">
      <div class="car-card__image-containerr">
        <img src="${car.image}" alt="${car.model} car" class="car-card__imager" />
      </div>

      <div class="car-card__specsr">
        <div class="specs_gasoliner">
          <img src="/assets/icons/gas-station.png" alt="gas" />
          <p>${car.fuel}</p>
        </div>
        <div class="specs_carr">
          <img src="/assets/icons/Car.png" alt="car" />
          <p>${car.transmission}</p>
        </div>
        <div class="specs__capacityr">
          <img src="/assets/icons/profile-2user.png" alt="capacity" />
          <p>${car.capacity}</p>
        </div>
      </div>
      </div>
    

      <div class="car-card__pricingr">
        <div class="car-card__price">
          <div class="car-card__currentr">
            <p class="car-card__current-price">
              ${car.currentprice}/<span id="car-card__day">day</span>
            </p>
            <p class="car-card__original-price">${car.originalprice}</p>
          </div>
        </div>
        <div>
          <button class="car-card__button">Rent Now</button>
        </div>
      </div>
    </article>
  `
  )
  .join("");

recomendGrid.innerHTML = recomendCarsHTML;
