

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
    Возвращает массивы, в которые ввелись данные из строчек, а также элемент,
    куда будет выводиться выходной результат
*/
function getStrings(string1Id, string2Id, outStringId) {
    let a = document.getElementById(string1Id);
    let b = document.getElementById(string2Id);
    let outResult = document.getElementById(outStringId);

    let mass1 = checkMessage(a, 1);
    if (mass1 == false) return false;
    let mass2 = checkMessage(b, 2);
    if (mass2 == false) return false;

    return [mass1, mass2, outResult];
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
            if (y != x && mass[y] == mass[x]) {
                mass.splice(y, 1);
                y--;
            }
    return mass;
}

/*
    Выполняет пересечение двух массивов
 */
function intersects(mass1, mass2)
{
    let mass3 = [];
    for(let x = 0; x < mass1.length; x++)
        for(let y = 0; y < mass2.length; y++)
            if(mass1[x] == mass2[y])
            {
                mass3.push(mass1[x]);
                break;
            }
    return mass3;
}

/*
    Выолняет симметрическую разность над двумя массивами
 */
function symmetricDifference(mass1, mass2)
{
    let mass3 = [];
    for(let x = 0; x < mass1.length; x++)
        if(countElements(mass2, mass1[x]) == 0)
            mass3.push(mass1[x]);

    for(let x = 0; x < mass2.length; x++)
        if(countElements(mass1, mass2[x]) == 0)
            mass3.push(mass2[x]);
    return mass3;
}

/*
    Выполняет объединение над двумя массивами
 */
function merge(mass1, mass2) {
    return removeRepetitions(mass1.concat(mass2));
}


/*
    Выполняет пересечение над данными, введёнными в поля на странице
*/
function calculateIntersects() {
    let data = getStrings('mass1', 'mass2', 'outResult');
    if(data == false) return;

    let mass_1 = data[0];
    let mass_2 = data[1];
    let outResult = data[2];

    //Пересечение
    outResult.innerText = intersects(mass_1, mass_2);
}

/*
    Выполняет симметричную разность над данными, введёнными в поля на странице
 */
function calculateSymmetricDifference()
{
    let data = getStrings('mass1', 'mass2', 'outResult');
    if(data == false) return;

    let mass_1 = data[0];
    let mass_2 = data[1];
    let outResult = data[2];

    //Симметрическая разность
    outResult.innerText = symmetricDifference(mass_1, mass_2);
}

/*
    Выполняет объединение над данными, введёнными в поля на странице
*/
function calculateMerge()
{
    let data = getStrings('mass1', 'mass2', 'outResult');
    if(data == false) return;

    let mass_1 = data[0];
    let mass_2 = data[1];
    let outResult = data[2];

    //Объединение
    outResult.innerText = merge(mass_1, mass_2);
}