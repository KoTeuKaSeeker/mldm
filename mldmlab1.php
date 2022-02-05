<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Лабораторные работы</title>
        <link rel="stylesheet" href="/styles/styles.css">
        <script type="text/javascript" src="/scripts/scripts.js"></script>

    </head>
    <body>
        <h1> Лабораторная работа #1 </h1>

        <form method="" action="">
            <table>
                <tr>
                    <td>Первый массив</td>
                    <td><input type="text" id="mass1" value="" size="150" /></td>
                </tr>

                <tr>
                    <td>Второй массив</td>
                    <td><input type="text" id="mass2" value="" size="150" /></td>
                </tr>

                <tr>
                    <td><input type="button" class="button1" value="Пересечение" onclick="calculateIntersects();"></td>
                    <td><input type="button" class="button1" value="Симметрическая разность" onclick="calculateMerge();"></td>
                </tr>

               <!-- <tr>
                    <td>Введите матрицу</td>
                    <td><textarea id="mass3" value="">Тут вводится матрица</textarea><br></td>
                </tr>-->
            </table>
        </form>

    <div id="outResult">123</div>

    </body>

</html>