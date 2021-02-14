var users = [
	["john", "red", 5, ["ball", "book", "pen"]],
	["becky", "blue", 10, ["tape", "backpack", "pen"]],
	["susy", "red", 55, ["ball", "eraser", "pen"]],
	["tyson", "green", 1, ["book", "pen"]],
];

console.log(users);

let arrayNameFirst = [];

users.forEach(function (element) {
	arrayNameFirst.push(element[0] + "!")
})

console.log(arrayNameFirst);

let arrayNameSecond = users.map(function (element) {
	return element[0] + "?";
});

console.log(arrayNameSecond);

let arrayNameThird = users
	.filter(function (element) {
		return element[1] === "red";
	});

let Amount = arrayNameThird
	.reduce(function (totalsum, element) {
		return totalsum + element[2];
	}, 0);

console.log(arrayNameThird);
console.log(Amount);

document.write(`<table>
		<tr>
			<td>${arrayNameThird[0].join('</td><td>')}</td>
		</tr>
		<tr>
			<td>${arrayNameThird[1].join('</td><td>')}</td>
		</tr>
   <tfoot>
		<tr>
			<td colspan=4>Final summ: ${Amount}</td>
		</tr>
   </tfoot>
</table>`);

//arrayNameFirst.push(Array.isArray(element[0]) ? element[0] + "!".slice() : element[0] + "!");
