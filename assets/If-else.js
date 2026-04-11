// 1

let requestUser_1 = Number(prompt("Введите первое число:"));
let requestUser_2 = Number(prompt("Введите второе число:"));
let sum = requestUser_1 + requestUser_2;

if (sum % 5 === 0) {
  alert("Сумма кратна 5");
} else alert("Сумма не кратна 5");

// 2

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

// 3

let buyValue = Number(prompt("Введите сумму покупки:"));

if (buyValue > 800) {
  buyValue = buyValue * 0.95;
} else if (buyValue > 500) {
  buyValue = buyValue * 0.97;
}

alert("Итоговая сумма: " + buyValue);

// 4
let numberOne = Number(prompt("Напишите первое число"));
let numberTwo = Number(prompt("Напишите второе число"));
console.log(numberOne % numberTwo === 0);