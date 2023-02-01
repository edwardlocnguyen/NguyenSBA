// js collection
var dropdownYears = document.getElementsByClassName('year-item');
var yearDisplayed = document.getElementById('year_displayed');

var row1Amount = document.getElementById('row1Amount');
var row2Amount = document.getElementById('row2Amount');
var row3Amount = document.getElementById('row3Amount');
var row4Amount = document.getElementById('row4Amount');
var row5Amount = document.getElementById('row5Amount');
var row6Amount = document.getElementById('row6Amount');
var rowTotalAmount = document.getElementById('rowTotalAmount');

// hard-coded values for each year

var dict23 = {
	row1Amount: "$2,000.00",
	row2Amount: "$4,000.00",
	row3Amount: "$40,000.00",
	row4Amount: "$3,000.00",
	row5Amount: "$200,000.00",
	row6Amount: "$500.00",
	rowTotalAmount: "$249,500.00"
}

var dict22 = {
	row1Amount: "$2,000.00",
	row2Amount: "$3,000.00",
	row3Amount: "$30,000.00",
	row4Amount: "$2,500.00",
	row5Amount: "$220,000.00",
	row6Amount: "$450.00",
	rowTotalAmount: "$257,950.00"
}

var dict21 = {
	row1Amount: "$1,000.00",
	row2Amount: "$2,500.00",
	row3Amount: "$25,750.00",
	row4Amount: "$20,000.00",
	row5Amount: "$180,000.00",
	row6Amount: "$900.00",
	rowTotalAmount: "$230,150.00"
}

// js loops to change values in tables depending on the year chosen
Array.from(dropdownYears).forEach((dropdownYears) => {
	
	// js event
	dropdownYears.addEventListener('click', (event) => {
		yearDisplayed.innerText = event.target.innerText;

		switch (event.target.innerText) {
			case "2023":
				row1Amount.innerText = dict23.row1Amount;
				row2Amount.innerText = dict23.row2Amount;
				row3Amount.innerText = dict23.row3Amount;
				row4Amount.innerText = dict23.row4Amount;
				row5Amount.innerText = dict23.row5Amount;
				row6Amount.innerText = dict23.row6Amount;
				rowTotalAmount.innerText = dict23.rowTotalAmount;
				break;
			case "2022":
				row1Amount.innerText = dict22.row1Amount;
				row2Amount.innerText = dict22.row2Amount;
				row3Amount.innerText = dict22.row3Amount;
				row4Amount.innerText = dict22.row4Amount;
				row5Amount.innerText = dict22.row5Amount;
				row6Amount.innerText = dict22.row6Amount;
				rowTotalAmount.innerText = dict22.rowTotalAmount;
				break;
			case "2021":
				row1Amount.innerText = dict21.row1Amount;
				row2Amount.innerText = dict21.row2Amount;
				row3Amount.innerText = dict21.row3Amount;
				row4Amount.innerText = dict21.row4Amount;
				row5Amount.innerText = dict21.row5Amount;
				row6Amount.innerText = dict21.row6Amount;
				rowTotalAmount.innerText = dict21.rowTotalAmount;
				break;
		}

	});
});