var serverUrl = 'http://localhost:3000/api/v1';
var record;

function getRecord(){
    const id = new URLSearchParams(window.location.search).get('id');
    $.ajax({
        'async': false,
        'type': 'GET',
        'url': serverUrl + '/records/' + id,
        'success': function (data) {
            record = data;
        }
    });
}

function updateRecord(){
    const id = new URLSearchParams(window.location.search).get('id');
    $.ajax({
        'async': false,
        'type': 'PUT',
        'url': serverUrl + '/records/' + id,
        'data': {
            name: $('#name').val(), phone: $('#phone').val()
        },
        'success': function (data) {
            window.location.reload();
            alert('Record updated');
        }
    });
}

function deleteRecord(){
    const id = new URLSearchParams(window.location.search).get('id');
    $.ajax({
        'async': false,
        'type': 'DELETE',
        'url': serverUrl + '/records/' + id,
        'success': function (data) {
            window.location.replace("http://localhost:3000/pages/crud");
            alert('Record deleted');
        }
    });
}

function fillTable(){
    let html = '';

        html += `<tr><td>`
                   + record['_id']
                   + '</td><td>'
                   + record['name']
                   + '</td><td>'
                   + record['phone']
                   + '</td><td>'
                   + record['createdAt']
                   + '</td></tr>';
      
      console.log(html);
      document.getElementById('crud').innerHTML = html;
}
window.onload = function () {
    getRecord();
    fillTable();
};