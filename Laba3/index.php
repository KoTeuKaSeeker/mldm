<html>

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <link rel="stylesheet" href="styles/index.css">
        <script src="scripts/ratioFunction.js"></script>
    </head>

    <body>
        <div class="container backgroundContainer">
            <div class="jetBrainsHeaderFont headerText">Лабораторная работа 3</div>
        </div>

        <div class="container backgroundContainer">

            <div>
                <div class="jetBrainsFont defaultText">Элементы первого множества</div>
                <input id="setA" type="text" size="40" class="jetBrainsFont" placeholder="a b c d">
            </div>

            <div>
                <div class="jetBrainsFont defaultText">Элементы второго множества</div>
                <input id="setB" type="text" size="40" class="jetBrainsFont" placeholder="1 2 3 4">
            </div>

            <div>
                <div class="jetBrainsFont defaultText">Отношение</div>
                <input id="ratio" type="text" size="40" class="jetBrainsFont" placeholder="a 1, b 2, c 3, d 4">
            </div>

            <div class="buttonOffset">
                <button class="button" onclick="start();">Проверить</button>
            </div>

            <div id="resultAB" class="jetBrainsFont defaultText buttonOffset"></div>
            <div id="resultBA" class="jetBrainsFont defaultText buttonOffset"></div>

        </div>
    </body>

</html>