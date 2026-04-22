// 1
let firstNumber = prompt("Введите первое число:");
let secondNumber = prompt("Введите второе число:");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

let sum = firstNumber + secondNumber;
let divisor = 5;

if (sum % divisor === 0) {
  alert("Сума кратна 5");
} else {
  alert("Сума не кратна 5");
}

// 2
function showMenu() {
  let choice = prompt("1 - Чай\n2 - Кава\n3 - Сік\n4 - Вода");

  if (choice === "1") {
    alert("Ви обрали чай");
  } else if (choice === "2") {
    alert("Ви обрали каву");
  } else if (choice === "3") {
    alert("Ви обрали сік");
  } else if (choice === "4") {
    alert("Ви обрали воду");
  } else {
    alert("Такого напою у нас нема");
  }
}

showMenu();

// 3
let purchaseAmount = Number(prompt("Введіть суму покупки:"));

let firstDiscountThreshold = 500;
let secondDiscountThreshold = 800;

let firstDiscountPercent = 3;
let secondDiscountPercent = 5;

if (purchaseAmount > secondDiscountThreshold) {
  purchaseAmount =
    purchaseAmount - (purchaseAmount * secondDiscountPercent) / 100;
} else if (purchaseAmount > firstDiscountThreshold) {
  purchaseAmount =
    purchaseAmount - (purchaseAmount * firstDiscountPercent) / 100;
}

alert("Остаточна сума покупки: " + purchaseAmount);

// 4
let numberOne = Number(prompt("Введіть перше число:"));
let numberTwo = Number(prompt("Введіть друге число:"));

console.log(numberOne % numberTwo === 0);