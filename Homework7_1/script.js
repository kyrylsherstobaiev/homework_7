let amount = 100;

let monday = [
	['Write a tutorial', 180],
	['Some web development', 120]
];

let tuesday = [
	['Keep writing that tutorial', 240],
	['Some more web development', 180],
	['A whole lot of nothing', 240]
];

let tasks = [monday, tuesday];
tasks = [...monday, ...tuesday];

console.log(tasks);

let arrayTimePrice = tasks
	.map(function (element) {
		return [element[0], element[1] / 60];
	})
	.filter(function (element) {
		return element[1] >= 3;
	})
	.map(function (element) {
		let value = element[1] * amount;
		element.push(value);
		return element;
	})
	.map(function (element) {
		element = `<tr>
		<td>Task name: ${element[0]}</td>
		<td>Task duration: ${element[1]} hours</td>
		<td>Task amount: $${element[2]}</td>
		</tr>`;
		return element;
	});

console.log(arrayTimePrice);

document.write(`<table>${arrayTimePrice.join('')}</table>`);

