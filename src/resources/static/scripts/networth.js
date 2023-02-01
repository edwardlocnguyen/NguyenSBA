var dropdownYears = document.getElementsByClassName('year-item');
var yearDisplayed = document.getElementById('year_displayed');

var row1Amount = document.getElementById('row1Amount').innerText;
var row2Amount = document.getElementById('row2Amount').innerText;
var row3Amount = document.getElementById('row3Amount').innerText;
var row4Amount = document.getElementById('row4Amount').innerText;
var row5Amount = document.getElementById('row5Amount').innerText;
var row6Amount = document.getElementById('row6Amount').innerText;
var rowTotalAmount = document.getElementById('rowTotalAmount').innerText;

var dict22 = {
	row1Amount: "$2,000.00",
	row2Amount: "$3,000.00",
	row3Amount: "$30,000.00",
	row4Amount: "$2,500.00",
	row5Amount: "$220,000.00",
	row6Amount: "$450.00",
	rowTotalAmount: "$257,950.00"
}

Array.from(dropdownYears).forEach((dropdownYears) => {
	dropdownYears.addEventListener('click', (event) => {
		yearDisplayed.innerText = event.target.innerText;
		
		if (event.target.innerText == "2022") {
			for (var key in dict22) {
				console.log("row1Amount: ", row1Amount);
				console.log("key: ", key);
				if (row1Amount == key) {
					console.log(row1Amount);
				}
			}
		}
		
	});
});