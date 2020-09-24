// from data.js
var tableData = data;

// YOUR CODE HERE!
var tablebody = d3.select("tbody")
function tablemaker(data){
//For each row we want to append some values to what will be data rows
    data.forEach(function (datarow){
        row = tablebody.append("tr");
        Object.values(datarow).forEach(function (value){
           cell = row.append ("td")
           cell.text(value)
        })
})

}
tablemaker(tableData)