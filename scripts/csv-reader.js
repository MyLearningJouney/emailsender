const csvFile = document.getElementById("csvFile").files[0]; //seleciona o arquivo csv
var btnEnviarCsv = document.getElementById("send-csv") //seleciona o botão que fará a ação desejada
var a = [];

btnEnviarCsv.addEventListener("click",function(e){ //escuta a ação de clich no botão e executa a função de ler o arquivo csv e transformar em um objeto.
    e.preventDefault();
    Papa.parse(csvFile, {
        header: true,
        complete: function(results) {
            console.log("Finished:", results.data);
            results.data.forEach(element => {
                console.log('a')
            });
        }
    });
});

