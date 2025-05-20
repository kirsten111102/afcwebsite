fetch('/html/Header.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });