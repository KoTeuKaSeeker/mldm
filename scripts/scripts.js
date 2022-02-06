

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
    Фукнция проверяет символ на соответвие введённому формату
    c - цифра
    b - буква
    i - четная цифра
    j - нечётная цифра
*/
function checkSymbolFormat(sym, symFormat) {
    if ((symFormat == 'c') && (sym >= '0' && sym <= '9')) //Цифра
        return true;
    else if ((symFormat == 'b') && (sym >= 'a' && sym <= 'z')) //Буква
        return true;
    else if ((symFormat == 'i') && (sym >= '0' && sym <= '9') && sym % 2 == 0) //Чётная цифра
        return true;
    else if ((symFormat == 'j') && (sym >= '0' && sym <= '9') && sym % 2 == 1) //Нечётная цифра
        return true;
    return false;
}

/*
    Проверяет, совподает ли слово word формату format
*/
function checkWordFormat(word, format)
{
    if(word.length != format.length)
        return false;

    for(let x = 0; x < word.length; x++)
        if(!checkSymbolFormat(word[x], format[x]))
            return false;
    return true;
}

function checkWordsFormat(words, format)
{
    for(let x = 0; x < words.length; x++)
        if(!checkWordFormat(words[x], format))
            return false;
    return true;
}



/*
    Выводит ошибку если строка пустая или если слово в строке начинается не с буквы
*/
function checkMessage(str, id, format) {
    let result = false;
    let mass = [];
    let errorMessage = '';
    if (validateString(str)) {
        mass = str.value.split(' ');

        /*
        let result = validateWords(mass);
        if (!result[0]) {
            alert('В массиве ' + id + ' cлова введены не правельно. Ошибка в ' + result[1]);
            return false;
        }
         */
        if(checkWordsFormat(mass, format)) {
            result = true;
        } else {
            errorMessage += 'Массив ' + id + ' имеет неподходящий формат. Формат должен быть вида ' + format +
                  '. Здесь c - цифра, b - буква, i - чётная цифра, j - нечётная цифра\n\n';
        }
    } else
        errorMessage += 'Массив ' + id + ' не должен быть\n\n';

    return [mass, result, errorMessage];
}

/*
    Возвращает массивы, в которые ввелись данные из строчек, а также элемент,
    куда будет выводиться выходной результат
*/
function getStrings(string1Id, string2Id, outStringId, format) {
    let a = document.getElementById(string1Id);
    let b = document.getElementById(string2Id);
    let outResult = document.getElementById(outStringId);
    let result = true;

    let result1 = checkMessage(a, 1, format);
    if (result1[1] == false) result = false;
    let result2 = checkMessage(b, 2, format);
    if (result2[1] == false) result = false;

    if(result == false)
        alert(result1[2] + result2[2]);

    return [result1[0], result2[0], outResult, result];
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
    Выполняет дополнение двух множеств
 */
function addition(mass1, mass2)
{
    let mass3 = mass1.length >= mass2.length ? mass1 : mass2; //Большее множество
    let massMin = mass1.length < mass2.length ? mass1 : mass2; //Меньшее множество

    for(let x = 0; x < mass3.length; x++)
        if(countElements(massMin, mass3[x]) > 0)
        {
            mass3.splice(x, 1);
            x--;
        }
    return mass3;
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












var format = 'cbc'


/*
    Выполняет дополнение над данными, введёнными в поля на странице
*/
function calculateAddition()
{
    let data = getStrings('mass1', 'mass2', 'outResult', format);
    if(data[3] == false) return;

    let mass_1 = data[0];
    let mass_2 = data[1];
    let outResult = data[2];

    //Дополнение
    outResult.innerText = addition(mass_1, mass_2);
}

/*
    Выполняет пересечение над данными, введёнными в поля на странице
*/
function calculateIntersects() {
    let data = getStrings('mass1', 'mass2', 'outResult', format);
    if(data[3] == false) return;

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
    let data = getStrings('mass1', 'mass2', 'outResult', format);
    if(data[3] == false) return;

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
    let data = getStrings('mass1', 'mass2', 'outResult', format);
    if(data[3] == false) return;

    //Объединение
    data[2].innerText = merge(data[0], data[1]);
}

/*
    Основная функция где происходят вычисления
*/
function calculate(id)
{
    let data = getStrings('mass1', 'mass2', 'outResult', format);
    if(data[3] == false) return;

    switch(id)
    {
        case 0: data[2].innerText = addition(data[0], data[1]);            break; //Дополнение
        case 1: data[2].innerText = intersects(data[0], data[1]);          break; //Пересечение
        case 2: data[2].innerText = symmetricDifference(data[0], data[1]); break; //Симметрическая разность
        case 3: data[2].innerText = merge(data[0], data[1]);               break;//Объединение
        default: return; break;
    }

    return;
}