import './style.css';
import coffees from './coffees.json';

{
  const $priceList = document.querySelector(`.prices__list`);
  const allDrinks = [];


  const JSONdata = () => {
    const coffee = coffees.coffees;
    for (let i = 0; i < 4; i++) {
      allDrinks.push(coffee[i]);
    }
  };

  const printDrinks = () => {
    allDrinks.forEach(drink => {
      $priceList.innerHTML += `<li class="price">
          <a class="price__button flex">
            <span class="price__button__wrapper">
              <span class="price__button__name">${drink.name}</span> <br>
              <span class="price__button__amount">&euro; ${drink.prices.small}</span>
            </span>
            <span class="price__button__plus">+</span>
          </a>
        </li>`;
    });
  };

  const getClickedDrink = () => {
    console.log(`test`);
    const element = document.querySelector(``);
    const text = element.innerText || element.textContent;
    element.innerHTML = text;
  };


  const init = () => {
    JSONdata();
    printDrinks();
    document.querySelector(`.price__button`).addEventListener(`click`, getClickedDrink);
  };
  init();
}
