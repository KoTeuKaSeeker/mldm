<html>

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <link rel="stylesheet" href="styles/index.css">

        <script
                src="https://code.jquery.com/jquery-3.6.0.js"
                integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
                crossorigin="anonymous"></script>

        <script>
            function send(message)
            {
                $.ajax({
                    type: "POST",
                    url: 'scripts/matrix.php',
                    data: message,
                    success: function(data){
                        document.getElementById("result").innerHTML = data;
                    }
                });
            }
        </script>
    </head>

    <body>
        <div class="container backgroundContainer">
            <div class="headerText jetBrainsHeaderFont"> Лабораторная работа 5</div>
        </div>

        <div class="container backgroundContainer">
            <div class="regularText jetBrainsFont">Введите матрицу смежности</div>
            <textarea class="backgroundContainer regularText jetBrainsFont" rows="5" cols="40" name="matrix" id="matrix"
            placeholder="Пример ввода:
1 0 1
0 0 0
0 1 0"></textarea><br>
        </div>

        <div class="container">
            <button class="button" onclick="
            let matrix = document.getElementById('matrix').value;
            let message = {
                'matrix' : matrix,
            };
            send(message);
            ">Вычислить матрицу достижимости</button>
        </div>

        <div class="resultMargin backgroundContainer">
            <div class="regularText jetBrainsFont" id="result"></div>
        </div>
    </body>

</html>