<html>

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <link rel="stylesheet" href="styles/index.css">
        <script src="scripts/matrix.js"></script>
    </head>

    <body>
        <div class="header contentBackground">
            <div class="headerText jetBrainsHeaderFont">Лабораторная работа 2</div>
        </div>

        <div class="contentBackground">
            <div class="jetBrainsFont defaultText">Введите пары элементов</div>
            <div class="textField">
                <input id="textField" type="text" size="40" class="jetBrainsFont" placeholder="
a b, c d">
            </div>

            <div class="textField">
                <button class="buttonStyle" onclick="showMatrix();">Показаить таблицу</button>
            </div>

            <div class="jetBrainsFont defaultText" id="matrix"></div> <br><br>
            <div class="jetBrainsFont defaultText" id="reflection"></div>
            <div class="jetBrainsFont defaultText" id="symmetry"></div>
            <div class="jetBrainsFont defaultText" id="antisymmetry"></div>
            <div class="jetBrainsFont defaultText" id="transitivity"></div>
        </div>

    </body>

</html>