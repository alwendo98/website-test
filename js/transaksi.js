let tableCont = document.querySelector('#table-cont');

fetch('https://gorest.co.in/public/v2/comments', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((response) => response.json())
    .then((data) => {
        let thead = '<tr><th>id</th><th>post_id</th>><th>name</th>><th>email</th>><th>body</th>';

        data.forEach((element) => {
            thead += '<tr><td>' + element.id + '</td><td>' + element.post_id + '</td> <td>' + element.name + '</td><td>' + element.email + '</td><td>' + element.body + '</td></tr>';
        });
        tableCont.innerHTML = thead;
    });