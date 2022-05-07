function getPairElements(text)
{
    let isRight = true;
    let matrixElements = text.value.split(", ");
    let matrixPairs = new Array(matrixElements.length);
    for(let x = 0; x < matrixElements.length; x++) {
        matrixPairs[x] = matrixElements[x].split(" ");
        if(matrixPairs[x].length > 2) {
            alert("Количество элементов в группе равно " + matrixPairs[x].length + ", а должна быть пара, \n" +
                "то есть 2 элемента");
            isRight = false;
            break;
        }
    }

    if(isRight)
        return matrixPairs;
    else
        return false;
}

function uniq(a) {
    let seen = {};
    let out = [];
    let len = a.length;
    let j = 0;
    for(let i = 0; i < len; i++) {
        let item = a[i];
        if(seen[item] !== 1) {
            seen[item] = 1;
            out[j++] = item;
        }
    }
    return out;
}

function getIdOnAxis(axis, element)
{
    let id = -1;
    for(let x = 0; x < axis.length; x++)
        if(axis[x] == element)
        {
            id = x;
            break;
        }
    return id;
}

function reflection(matrix)
{
    let isReflection = true;
    for(let x = 0; x < matrix.length; x++)
        if(matrix[x][x] == 0){
            isReflection = false;
            break;
        }
    return isReflection;
}

function symmetry(matrix)
{
    let isSymmetry = true;
    for(let x = 0; x < matrix.length; x++)
        for(let y = 0; y < matrix[x].length; y++)
            if(matrix[x][y] != matrix[y][x])
            {
                isSymmetry = false;
                break;
            }

    return isSymmetry;
}

function transitivity(matrix)
{
    let isTrans = true;
    for(let x = 0; x < matrix.length && isTrans == true; x++)
        for(let y = 0; y < matrix[x].length && isTrans == true; y++)
        {
            if(matrix[x][y] == 1)
            {
                for(let i = 0; i < matrix.length && isTrans == true; i++)
                {
                    if(matrix[y][i] == 1 && matrix[x][i] != 1)
                    {
                        isTrans = false;
                        break;
                    }
                }
            }
        }
    return isTrans;
}

function antisymmetry(matrix)
{
    // aRb и bRa => a = b

    let isAnti = true;
    for(let x = 0; x < matrix.length && isAnti == true; x++)
        for(let y = 0; y < matrix[x].length && isAnti == true; y++)
        {
            if(matrix[x][y] == 1 && matrix[y][x] == 1 && x != y)
            {
                isAnti = false;
                break;
            }
        }
    return isAnti;
}

// 1 2, 3 4, 2 1

//  1 2 3 4
//1 0 1 0 0
//2 1 0 0 0
//3 0 0 0 0
//4 0 0 1 0

function showMatrix()
{
    let textFieldElement = document.getElementById("textField");
    let matrixElement = document.getElementById("matrix");
    let reflectionElement = document.getElementById("reflection");
    let symmetryElement = document.getElementById("symmetry");
    let antisymmetryElement = document.getElementById("antisymmetry");
    let transitivityElement = document.getElementById("transitivity");

    //Пары
    let pairElements = getPairElements(textField);

    //Получение оси матрицы
    let axis = new Array(pairElements.length * pairElements[0].length);
    for(let x = 0; x < pairElements.length; x++)
        for(let y = 0; y < pairElements[x].length; y++) {
            axis[y + x * pairElements[x].length] = pairElements[x][y];
        }

    //Убирание повторяющиъся и сортировка
    axis = uniq(axis);
    axis.sort();

    //Создание матрицы
    let matrix = new Array(axis.length);
    for(let x = 0; x < axis.length; x++)
    {
        matrix[x] = new Array(axis.length);
        for(let y = 0; y < axis.length; y++)
            matrix[x][y] = 0;
    }

    //Заполнение матрицы
    for(let x = 0; x < pairElements.length; x++)
    {
        let idX = getIdOnAxis(axis, pairElements[x][0]);
        let idY = getIdOnAxis(axis, pairElements[x][1]);
        matrix[idX][idY] = 1;
    }

    //Отображение матрицы
    matrixElement.innerHTML = "";
    for(let y = 0; y < axis.length; y++)
    {
        for(let x = 0; x < axis.length; x++)
            matrixElement.innerHTML += matrix[x][y] + " ";
        matrixElement.innerHTML += "<br>";
    }

    //Определение свойств отношения
    reflectionElement.innerHTML     = "Рефлексивность: "     + (reflection(matrix)   == true ? "Да" : "Нет");
    symmetryElement.innerHTML       = "Симметричность: "     + (symmetry(matrix)     == true ? "Да" : "Нет");
    antisymmetryElement.innerHTML   = "Кососимметричность: " + (antisymmetry(matrix) == true ? "Да" : "Нет");
    transitivityElement.innerHTML   = "Транзитивность: "     + (transitivity(matrix) == true ? "Да" : "Нет");
}