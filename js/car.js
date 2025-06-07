const cars = [
  {
    id: 1,
    model: "Koenigegg",
    type: "Sport",
    image: "/assets/images/1.png",
    fuel: "90L",
    transmission: "Manual",
    capacity: "2 people",
    currentprice: "$99.00",
    originalprice: "",
  },
  {
    id: 2,
    model: "Nissan GT - R",
    type: "Sport",
    image: "/assets/images/2.png",
    fuel: "90L",
    transmission: "Manual",
    capacity: "2 people",
    currentprice: "$80.00",
    originalprice: "$100.00",
  },
  {
    id: 3,
    model: "Koenigegg",
    type: "Sedan",
    image: "/assets/images/3.png",
    fuel: "90L",
    transmission: "Manual",
    capacity: "4 people",
    currentprice: "$96.00",
    originalprice: "",
  },
  {
    id: 4,
    model: "Nissan GT - R",
    type: "Sport",
    image: "/assets/images/1.png",
    fuel: "90L",
    transmission: "manual",
    capacity: "2 people",
    currentprice: "$80.00",
    originalprice: "$100.00",
  },
];

const grid = document.getElementById("popularCarsGrid");

const carCardsHTML = cars
  .map(
    (car) => `
  <article class="car-card">
    <div class="car-card__header">
      <div class="car-card__top">
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

    <div class="car-card__specs">
      <div class="specs_gasoline">
        <div>
          <img src="/assets/icons/gas-station.png" alt="gas" />
        </div>
        <div>
          <p>${car.fuel}</p>
        </div>
      </div>
      <div class="specs_car">
        <div>
          <img src="/assets/icons/Car.png" alt="car" />
        </div>
        <div>
          <p>${car.transmission}</p>
        </div>
      </div>
      <div class="specs__capacity">
        <div>
          <img src="/assets/icons/profile-2user.png" alt="capacity" />
        </div>
        <div>
          <p>${car.capacity}</p>
        </div>
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

grid.innerHTML = carCardsHTML;
