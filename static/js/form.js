serverUrl = 'http://localhost:3000/api/v1'

function sendForm(){
    if (!$('#textField').val() || !$('#telField').val())
    return alert('Заполните все поля');
    
    $.post(
        serverUrl + '/records',
        {name: $('#textField').val(), phone: $('#telField').val()},
        (data) => {
            alert(data.name + ', мы позвоним вам на номер ' + data.phone);
        }
    );
}