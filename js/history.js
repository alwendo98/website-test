let tableCont = document.querySelector('#table-cont');

fetch('https://gorest.co.in/public/v2/users', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((response) => response.json())
    .then((data) => {
        let thead = '<tr><th>id</th><th>name</th>><th>email</th>><th>gender</th>><th>status</th>';

        data.forEach((element) => {
            thead += '<tr><td>' + element.id + '</td><td>' + element.name + '</td> <td>' + element.email + '</td><td>' + element.gender + '</td><td>' + element.status + '</td></tr>';
        });
        tableCont.innerHTML = thead;
    });