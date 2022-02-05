
var mass_1, mass_2;

/*
    Определяет, является ли символ буквой
*/
function checkSymbol(sym) {
    return (sym >= 'a' && sym <= 'z');
}


/*
    Определяет корректность введённой строчки
*/
function validateString(str) {
    return str.value.length > 0;
}

/*
    Определяет корректность массива слов
*/
function validateWords(words) {
    let result = true;
    let id = 0;
    for (let x = 0; x < words.length; x++)
        if (!checkSymbol(words[x][0])) {
            result = false;
            id = x;
            break;
        }
    return [result, id];
}


/*
    Выводит ошибку если строка пустая или если слово в строке начинается не с буквы
*/
function checkMessage(str, id) {
    if (validateString(str)) {
        let mass = str.value.split(' ');
        let result = validateWords(mass);
        if (!result[0]) {
            alert('В массиве ' + id + ' cлова введены не правельно. Ошибка в ' + result[1]);
            return false;
        }

        return mass;
    } else
        alert('Массив ' + id + ' не должен быть пустым');
    return false;
}

/*
    Считает количество элементов element в массиве mass
*/
function countElements(mass, element) {
    let count = 0;
    for (let x = 0; x < mass.length; x++)
        if (mass[x] == element) count++;
    return count;
}

/*
    Удаляет повторяющиеся элементы в массиве
*/
function removeRepetitions(mass) {
    for (let x = 0; x < mass.length; x++)
        for (let y = 0; y < mass.length; y++)
            if (y != x && mass[y] == mass[x])
            {
                mass.splice(y, 1);
                y--;
            }
    return mass;
}

/*
    Основная функция считывания данных и вызова второстепенных функций
*/
function calculate() {
    let a = document.getElementById('mass1');
    let b = document.getElementById('mass2');
    let outResult = document.getElementById('outResult');

    mass_1 = checkMessage(a, 1);
    if (mass_1 == false) return;
    mass_2 = checkMessage(b, 2);
    if (mass_2 == false) return;

    outResult.innerText = removeRepetitions(mass_1.concat(mass_2));
}