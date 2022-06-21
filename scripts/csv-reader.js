const csvFile = document.getElementById("csvFile").files[0]; //seleciona o arquivo csv
var btnEnviarCsv = document.getElementById("send-csv") //seleciona o botão que fará a ação desejada
nome = [];
var desconto = [];
funcionario = {}; 
btnEnviarCsv.addEventListener("click",function(e){ //escuta a ação de clich no botão e executa a função de ler o arquivo csv e transformar em um objeto.
    e.preventDefault();
    Papa.parse(csvFile, {
        header: true,
        complete: function(results) {
            console.log("Finished:", results.data);
            results.data.forEach(Imprimir)
            results.data.forEach(PegaFaltas)
        }
    });
    console.log(nome)
    console.log('oii' + funcionario)
});

function Imprimir (item,indice){
    nome[indice] = item.Nome;
}

function PegaFaltas (item,index){
    let desconto = item.map(Matrícula => Matrícula.foo);
    console.log(desconto);
}
