const inputCsv = document.getElementById("input-csv");
const csvFile = document.getElementById("csvFile");

inputCsv.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = csvFile.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const str = e.target.result;
      var a =  str.trim().split(/\r?\n|\r/); // Regex to split/separate the CSV rows
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
      addRow('my-table');
    };
    reader.readAsText(input);
});


function csv_string_to_table(csv_string, element_to_insert_table) {
  var rows = csv_string.trim().split(/\r?\n|\r/); // Regex to split/separate the CSV rows
  var table = '';
  var table_rows = '';
  var table_header = '';
}


function csvToArray(str, delimiter = ",") {
    // slice from start of text to the first \n index
    // use split to create an array from string by delimiter
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
  
    // slice from \n index + 1 to the end of the text
    // use split to create an array of each csv value row
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
  
    // Map the rows
    // split values from each row into an array
    // use headers.reduce to create an object
    // object properties derived from headers:values
    // the object passed as an element of the array
    const arr = rows.map(function (row) {
      const values = row.split(delimiter);
      const el = headers.reduce(function (object, header, index) {
        object[header] = values[index];
        return object;
      }, {});
      return el;
    });
  
    // return the array
    return arr;
  };