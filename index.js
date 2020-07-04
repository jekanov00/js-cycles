// while
document.write('<h1>While</h1>');

// 1.

const userInputFirst = Number(prompt('1. How many # you want yo see?'));
let firstResult = '';

while (firstResult.length < userInputFirst) {
  firstResult += '#';
}

document.write('<h3>1. Вывести # столько раз, сколько указал пользователь.</h3><p>' + firstResult + '</p>');

// 2.

const userInputSecond = Number(prompt('2. Input first number'));
let secondResult = '';
let secondCounter = userInputSecond;

while (secondCounter >= 0) {
  secondResult += secondCounter-- + ' ';
}

document.write('<h3>2. Пользователь ввел число, а на экран вывелись все числа от введенного до 0.</h3><p>' + secondResult + '</p>');

// 3.

const userInputThird1 = Number(prompt('3. Enter a number'));
const userInputThird2 = Number(prompt('3. Enter a power for the number'));

let result3 = userInputThird1;
let i = userInputThird2;

if (userInputThird2 > 0) {
  while (i >= 2) {
    result3 *= userInputThird1;
    --i;
  }
} else if (userInputThird2 === 0) {
  result3 = 1;
} else if (userInputThird2 < 0) {
  i = Math.abs(i);
  while (i >= 2) {
    result3 *= userInputThird1;
    --i;
  }
  result3 = 1 / result3;
}

document.write('<h3>3. Запросить число и степень. Возвести число в указанную степень и вывести результат.</h3><p>' + result3 + '</p>');

// 4.

document.write('<h3>4. Запросить 2 числа и найти все общие делители.</h3><p>');

const userInputFourth1 = Number(prompt('4. Enter first number:'));
const userInputFourth2 = Number(prompt('4. Enter second number:'));

i = 0;
while (i <= userInputFourth1 && i <= userInputFourth2) {
  if (userInputFourth1 % i === 0) {
    if (userInputFourth2 % i === 0) {
      document.write(i + ' ');
    }
  }
  ++i;
}

document.write('</p>');

// 5.

document.write('<h3>5. Посчитать факториал введенного пользователем числа.</h3>');

const userInputFifth = Number(prompt('5. Enter factorial number:'));

if (userInputFifth >= 0) {

  let result5 = 1;
  i = userInputFifth;
  while (i >= 2) {
    result5 *= i;
    --i;
  }

  document.write('<p>' + result5 + '</p>');
} else {
  document.write('<p>Wrong input</p>');
}

// Do While
document.write('<h1>Do While</h1>');

// 1.

document.write('<h3>1. Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно.</h3>');

let userInputSixth;
do {
  userInputSixth = Number(prompt('Enter the result of "2 + 2 * 2":'));
} while (userInputSixth !== 2 + 2 * 2);

document.write('<p>' + userInputSixth + '</p>');

// 2.

document.write('<h3> 2. Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести это число и сколько делений произвели.</h3>');

let result7 = 1000;
let count7 = 0;

do {
  result7 /= 2;
  ++count7;
} while (result7 >= 50);

document.write('<p>' + result7 + ', ' + count7 + '</p>');
