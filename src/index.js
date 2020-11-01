import './style.css';
import coffees from './coffees.json';

{
  const $priceList = document.querySelector(`.prices__list`);
  const $allOrders = document.querySelector(`.all__orders`);
  const allDrinks = [];
  let currentDrinkList = [];

  const makeNum = number => {
    const removeSpace = number.replace(/\s/g, '');
    const entryArray = removeSpace.split("");
    const removeSymbol = entryArray.splice(1, 5);
    const toSring = removeSymbol.join("");
    return parseFloat(toSring);
  };

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
    currentDrinkList = [];
    const currentDrink = e.currentTarget.querySelector(`.price__button__name`).innerHTML;
    const currentPrice = e.currentTarget.querySelector(`.price__button__amount`).innerHTML;
    addCurrentDrink(currentDrink, makeNum(currentPrice));
  };



  const addCurrentDrink = (drink, price) => {
    const drinkArray = [];
    drinkArray.push(drink);
    drinkArray.push(price);
    currentDrinkList.push(drinkArray);
    printCurrentDrinks();
  };

  const printCurrentDrinks = () => {

    currentDrinkList.forEach(drink => {
      $allOrders.innerHTML += `<ul class="orders">
            <li class="order">
              <span class="order__name">
                <span class="order__amount"> x</span> ${drink[0]}
              </span>
              <span class="order__price">&euro; ${drink[1]}</span>
              <button class="remove">
                x
              </button>
            </li>
          </ul>`;
    });
  };


  const init = () => {
    JSONdata();
    printDrinks();
    document.querySelectorAll(`.price__button`).forEach($button => $button.addEventListener(`click`, getClickedDrink));
  };
  init();
}
