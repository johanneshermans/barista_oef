import './style.css';
import coffees from './coffees.json';

{
  const $priceList = document.querySelector(`.prices__list`);
  const $allOrders = document.querySelector(`.all__orders`);
  const $totalPrice = document.querySelector(`.total__price__real`);
  const $remove = document.querySelectorAll(`.order`);
  const $order = document.querySelector(`.orders__wrapper`);
  const $empty = document.querySelector(`.emptystate`);
  const allDrinks = [];
  const currentDrinkList = [];
  let localDrinkList = [];
  let totalPrice = 0;

  const subtract = (Price, newOrder) => {
    const sum = Price + newOrder;
    totalPrice = sum;
    return sum;
  };

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
    localDrinkList = [];
    const currentDrink = e.currentTarget.querySelector(`.price__button__name`).innerHTML;
    const currentPrice = e.currentTarget.querySelector(`.price__button__amount`).innerHTML;
    addCurrentDrink(currentDrink, makeNum(currentPrice));
  };


  const addCurrentDrink = (drink, price) => {
    const drinkArray = [];
    drinkArray.push(drink);
    drinkArray.push(price);
    currentDrinkList.push(drinkArray);
    localDrinkList.push(drinkArray);
    const test = checkArray(currentDrinkList);
    console.log(test);
    printTotalPrice(totalPrice, drinkArray[1]);
    printCurrentDrinks(localDrinkList);
  };

  const checkArray = array => {
    return new Set(array).size !== array.length;
  };

  const printCurrentDrinks = arr => {
    handleEmpty();
    arr.forEach(drink => {
      $allOrders.innerHTML += `
            <li class="order">
              <span class="order__name">
                <span class="order__amount"> 1x</span> ${drink[0]}
              </span>
              <span class="order__price">&euro; ${drink[1]}</span>
              <button class="remove">
                x
              </button>
            </li>
            <hr>
            `;
    });
  };

  const printTotalPrice = (totalPrice, newOrder) => {
    const total = subtract(totalPrice, newOrder);
    $totalPrice.innerHTML = `${total}`;
  };

  const handleEmpty = () => {
    if (currentDrinkList.length === 0) {
      console.log(`leeg`);
    } else if (currentDrinkList.length !== 0) {
      $empty.classList.add(`hide`);
      $order.classList.remove(`hide`);
    }
  };


  const init = () => {
    handleEmpty();
    JSONdata();
    printDrinks();
    document.querySelectorAll(`.price__button`).forEach($button => $button.addEventListener(`click`, getClickedDrink));

  };
  init();
}
