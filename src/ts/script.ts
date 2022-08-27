// fetch data from the server with id randomly generated and display it in the browser
let dice = document.getElementById('dice') as HTMLElement;
dice.addEventListener('click', e => {
	let slip_id = Math.floor(Math.random() * 100);
	fetch('https://api.adviceslip.com/advice/' + slip_id)
		.then(res => res.json())
		.then(data => {
			// console.log(data);
			let header = document.getElementById('header') as HTMLElement;
			let quote = document.getElementById('quote') as HTMLElement;
			header.textContent = `ADVICE # ${data.slip.id}`;
			quote.textContent = `"${data.slip.advice}"`;
		})
		.catch(err => {
			console.log(err);
		});
});

// for the first time the page is loaded, fetch data from the server and display it in the browser
dice.click();
