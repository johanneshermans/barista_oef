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
              <span class="price__button__name" data-item="${drink.name}">${drink.name}</span> <br>
              <span class="price__button__amount">&euro; ${drink.prices.small}</span>
            </span>
            <span class="price__button__plus">+</span>
          </a>
        </li>`;
    });
  };

  const getClickedDrink = e => {
    const currentDrink = e.currentTarget.querySelector(`.price__button__name`).innerHTML;
    const currentPrice = e.currentTarget.querySelector(`.price__button__amount`).innerHTML;
    console.log(currentDrink);
    console.log(currentPrice);
  };


  const init = () => {
    JSONdata();
    printDrinks();
    document.querySelectorAll(`.price__button`).forEach($button => $button.addEventListener(`click`, getClickedDrink));
  };
  init();
}
