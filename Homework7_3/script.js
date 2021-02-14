let arrayFirst = [2, 4, 6, 7, 8, 9, -10, 5];
let arraySecond = [-25, 50, -1, 5, 3, 7, 28];
let arrayThird = [4, 67, 4, 6, -5, 2, 54, 130];

let arrayMax = [];

//***********************the first  option*********************

function getMaxs() {
	let arrayUnite = [...arguments];
	arrayUnite.forEach(function (element) {
		let maxElement = element.reduce(function (max, item) {
			return max > item ? max : item;
		});
		arrayMax.push(maxElement);
	});
	console.log(arrayMax);
}


//***********************the second option*********************

//function getMaxs() {
//	let arrayUnite = [...arguments];
//	arrayUnite.forEach(function (element) {
//		arrayMax.push(Math.max(...element));
//	});
//	console.log(arrayMax);
//}

//************************************************************

getMaxs(arrayFirst, arraySecond, arrayThird);

