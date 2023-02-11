function sayHello(theName, theGender = "NaN") {
	// Your Code Here
	if (theGender === "Male") {
		console.log(`Hello Mr ${theName}`)
	} else if (theGender === "Female") {
		console.log(`Hello Miss ${theName}`)
	} else {
		console.log(`Hello ${theName}`)
	}
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"


function calculate(firstNum, secondNum = "NaN", operation) {
	// Your Code Here
	if (secondNum === "NaN") {
		console.log("Second Number Not Found");
	} else {
		switch (operation) {
			case 'subtract':
				console.log(firstNum - secondNum);
				break;
			case 'multiply':
				console.log(firstNum * secondNum);
				break;
			default:
				console.log(firstNum + secondNum);
				break;
		}
	}

}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600



function ageInTime(theAge) {
	// Your Code Here
	if (theAge < 10 || theAge > 100) {
		console.log("Age Out Of Range");
	} else {
		console.log(`Months => ${theAge * 12}`)
		console.log(`weeks => ${theAge * 12 * 4}`)
		console.log(`days => ${theAge * 12 * 30}`)
		console.log(`hours => ${theAge * 12 * 30 * 24}`)
		console.log(`minutes => ${theAge * 12 * 30 * 24 * 60}`)
		console.log(`seconds => ${theAge * 12 * 12 * 30 * 24 * 60 * 60}`)
	}
}
// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months



function checkStatus(a, b, c) {
	let arr = [a,b,c];
	for(let i = 0 ; i<arr.length;i++) {
		if(typeof arr[i] === "number"){
			a = arr[i];
		}else if(typeof arr[i] === "boolean") {
			b = arr[i]
		}else if(typeof arr[i] === "string") {
			c = arr[i];
		}
	}
	console.log(`Hello ${c}, Your Age Is ${a} , ${ b===true ? "You Are Available For Hire" :"You Are Not Available For Hire"}`)
}

  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"





function createSelectBox(startYear, endYear) {
	let select = document.createElement("select");
	for (let i = startYear; i <= endYear; i++) {
		select.innerHTML += `
		<option value = "${i}">${i}</option>
		`
	}
	console.log(select);
	document.body.append(select);
}
createSelectBox(2000, 2021);








function multiply(...data) {
	let mult = 1;
	for (let i = 0; i < data.length; i++) {
		if (typeof data[i] === "number") {
			mult *= Math.trunc(data[i]);
		} else {
			continue;
		}
	}
	console.log(mult)
}



multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000