// 1

let requestUser_1 = Number(prompt("Введите первое число:"));
let requestUser_2 = Number(prompt("Введите второе число:"));
let sum = requestUser_1 + requestUser_2;

if (sum % 5 === 0) {
  alert("Сумма кратна 5");
} else alert("Сумма не кратна 5");