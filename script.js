//1. Четные числа

let evenNumber = +prompt("Write a number")
let result = "";

for (evenNumber; evenNumber <= 100; evenNumber++) {
  if (evenNumber % 2 === 0) {
    if (evenNumber === 100) {
      result += evenNumber
    } else 
      result += evenNumber + ","
  }   console.log(result)
}

// // 2. Сумма выражения

// let edditedNumber = +prompt("Какая сумма выражения 3 + 4 = ?")

// if (edditedNumber === 7) {
//   alert("You goddamn right!");
// }

// while (edditedNumber != 7) {
//   let edditedNumber = +prompt("Введите правильный ответ!");
//   if (edditedNumber === 7) {
//     alert("You goddamn right!");
//     break;
//   }
// }

// // 3. Время и его четвертинки

// let minute = prompt("Введите число от 0 до 59")

// switch(true) {
//     case minute <= 14:
//       alert("В первую четверть");
//       break;
  
//     case minute <= 29:
//       alert("Во вторую четверть");
//       break;

//     case minute <= 44:  
//       alert("В третью четверть");
//       break;

//     case minute <= 59 :  
//       alert("В четвертой четверть");
//       break;
  
//     default:
//       alert("Better luck next time!")
//       break;
//   }