let tableCont = document.querySelector('#table-cont');

fetch('https://gorest.co.in/public/v2/todos', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((response) => response.json())
    .then((data) => {
        let thead = '<tr><th>id</th><th>user_id</th>><th>title</th>><th>due_on</th>><th>status</th>';

        data.forEach((element) => {
            thead += '<tr><td>' + element.id + '</td><td>' + element.user_id + '</td> <td>' + element.title + '</td><td>' + element.due_on + '</td><td>' + element.status + '</td></tr>';
        });
        tableCont.innerHTML = thead;
    });