console.log('hello');

let url = "http://localhost/bootstrap-with-db/php/get_results.php"
fetch(url)
    .then(respone=>respone.json())
    .then(data => {
    for (let i = 0; i < data.length; i++){
        const li = document.createElement('li');
        li.innerText = Object.values(data)[i].message;
        document.getElementById('list').appendChild(li);
    }    
    });