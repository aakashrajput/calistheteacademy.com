// Convert CM to M
function convertHeight(cm) {
	return cm / 100;
}

// Cache Event Elements
var calculate = $('#calculate');
var result = $('#xs-bmi-info');

result.fadeOut();

// RENDER SELECTED UNIT
calculate.on('click', function (e) {
	e.preventDefault();

	var weight = $('#xs-weight').val();
	var height = $('#xs-height').val();
	var height = convertHeight(height);

	if (height !== '' && weight !== '') {
		bmi = parseFloat( weight / (height * height) ).toFixed(2);

		if (bmi > 25) {
			result.html('<div class="xs-icon bg-warning"><spna class="icon icon-thumbs-down"></spna></div><p> <span class="text-warning"><strong>Oops! You are Overweight.</strong></span> Your BMI is: ' + bmi + ' </p>').fadeIn();
		} else if (bmi < 18.5) {
			result.html('<div class="xs-icon bg-info"><spna class="icon icon-thumbs-down"></spna></div><p> <span class="text-info"><strong>Oops! You are Underweight.</strong></span> Your BMI is: ' + bmi + ' </p>').fadeIn();
		} else {
			result.html('<div class="xs-icon xs-green-bg"><spna class="icon icon-thumbs-up"></spna></div><p> <span class="xs-green-color"><strong>Nice! You are healthy.</strong></span> Your BMI is: ' + bmi + ' </p>').fadeIn();
		}
	}
});