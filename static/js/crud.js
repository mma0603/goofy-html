var serverUrl = 'http://localhost:3000/api/v1';
var records;

function getRecords(){
    $.ajax({
        'async': false,
        'type': 'GET',
        'url': serverUrl + '/records',
        'success': function (data) {
            records = data;
        }
    });
}

function fillTable(){
    let html = '';
    for (var i=0, size=records.length; i<size;i++) {

        html += `<tr><td><a href="item?id=${records[i]['_id']}">`
                   + records[i]['_id']
                   + '</td><td></a>'
                   + records[i]['name']
                   + '</td><td>'
                   + records[i]['phone']
                   + '</td><td>'
                   + records[i]['createdAt']
                   + '</td></tr>';
      }
      console.log(html);
      document.getElementById('crud').innerHTML = html;
}
window.onload = function () {
    getRecords();
    fillTable();
};