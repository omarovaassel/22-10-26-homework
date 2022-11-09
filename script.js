// 1. Создать функцию, которая принимает массив чисел, и возвращает все
// числа одной строкой (string)

// function returnString(arr) {return String(arr)};
//
// console.log( returnString([1,2,3,4,5,6,7,8,9]) );

// 2. Создать функцию, которая принимает массив, и определяет, сколько там
// чисел с одинаковыми цифрами.
//
// Пример: [34, 66, 31, 87, 777, 12];
//
// Результат: 2
// нужно использовать массив, в котором все цифры больше девяти.
//
// решаем с помощью двух функций, такое мы уже делали в классе function(num) и потом вторая функция, внутри которой берем первую

function sameNumber(num) {
    let array = ("" + num).split(""); // каждую цифру разбиваю на массив

    for(let i = 0; i < array.length-1; i++) {
        if(array[i] !== array[i + 1]) {
            return false;
        }
    }
    return true;
}

function sameNumberFinal(arr){
    let count = 0;

    for(let num of arr){
        if(sameNumber(num)){
            count++;
        }
    }
    return count;
}

console.log( sameNumberFinal([11, 223, 17, 93, 44]) );

// 3. Создать функцию, которая принимает значение в секундах, и показывает
// на консоли значение в минутах и секундах.
// Пример: 200c - это 3 минуты и 20 секунд

// function showTime(sec){
//     let minutes = Math.trunc(sec / 60);
//     let seconds = sec - (minutes * 60);
//
//     console.log(minutes + ' мин ' + seconds + ' сек');
// }
//
// showTime(100);