const recomendCars = [
  {
    id: 1,
    model: "All New Rush",
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
    model: "All New Teriosigegg",
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
    model: "MG ZX Exclusice",
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
    <article class="car-card car-card-recomen">
      <div class="car-card__header">
        <div>
          <h3 class="car-card__model">${car.model}</h3>
          <p class="car-card__type">${car.type}</p>
        </div>
        <button class="car-card__heart" aria-label="Add to favorites">
          <img src="/assets/icons/Vector.png" alt="favourite" />
        </button>
      </div>

      <div class="car-card__image-container">
        <img src="${car.image}" alt="${car.model} car" class="car-card__image" />
      </div>

      <div class="car-card__specs " id="card-recomendation" >
        <div class="specs_gasoline">
          <img src="/assets/icons/gas-station.png" alt="gas" />
          <p>${car.fuel}</p>
        </div>
        <div class="specs_car">
          <img src="/assets/icons/Car.png" alt="car" />
          <p>${car.transmission}</p>
        </div>
        <div class="specs__capacity">
          <img src="/assets/icons/profile-2user.png" alt="capacity" />
          <p>${car.capacity}</p>
        </div>
      </div>

    <div class="car-card__pricing">
      <div class="car-card__price">
        <div class="car-card__current">
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
