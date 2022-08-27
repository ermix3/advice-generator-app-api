// fetch data from the server with id randomly generated and display it in the browser
var dice = document.getElementById('dice');
dice.addEventListener('click', function (e) {
    var slip_id = Math.floor(Math.random() * 100);
    fetch('https://api.adviceslip.com/advice/' + slip_id)
        .then(function (res) { return res.json(); })
        .then(function (data) {
        // console.log(data);
        var header = document.getElementById('header');
        var quote = document.getElementById('quote');
        header.textContent = "ADVICE # ".concat(data.slip.id);
        quote.textContent = "\"".concat(data.slip.advice, "\"");
    })
        .catch(function (err) {
        console.log(err);
    });
});
// for the first time the page is loaded, fetch data from the server and display it in the browser
dice.click();
