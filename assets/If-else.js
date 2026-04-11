// 3

let buyValue = Number(prompt("Введите сумму покупки:"));

if (buyValue > 800) {
  buyValue = buyValue * 0.95;
} else if (buyValue > 500) {
  buyValue = buyValue * 0.97;
}

alert("Итоговая сумма: " + buyValue);