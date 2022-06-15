import * as module from './node_modules/papaparse/papaparse.js';

const inputCsv = document.getElementById("input-csv");
const csvFile = document.getElementById("csvFile");
var b = Papa.parse(csvFile)
inputCsv.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = csvFile.files[0];
    const reader = new FileReader();
    var b = Papa.parse(reader);
    reader.onload = (e) => {
      const str = e.target.result;
      createTable(str)
      addRow('my-table');
    };
    reader.readAsText(input);
    console.log(b)
});

function createTable (string){
  var a =  string.trim().split(/\r?\n|\r/); // Regex to split/separate the CSV rows
  a.forEach((a,i) => {
    let tableRef = document.getElementById('my-table');
    let newRow = tableRef.insertRow(-1);
    var columns = a.split(','); // split/separate the columns in a row
    columns.forEach((columns,i) => {
      let newCell = newRow.insertCell(i);
      let newText = document.createTextNode(columns)
      newCell.appendChild(newText);
    })
  });
}