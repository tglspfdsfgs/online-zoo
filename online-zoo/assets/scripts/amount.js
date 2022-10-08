const donationBlock = document.querySelector(".donation-block");
const radioLabelsElem = donationBlock.querySelector(".donation-block__form-amount-line-internal");
const radioInputsCollection = radioLabelsElem.getElementsByTagName('input');
const amountInput = donationBlock.querySelector(".donation-block__number");

radioLabelsElem.onchange = function (event) {
	amountInput.value = event.target.value;
}

amountInput.oninput = function (event)  {
	let checkedRadio;

	for (let input of radioInputsCollection) {

		checkedRadio = input.checked ? input : checkedRadio;

		if (input.value == event.target.value) {
			input.checked = true;
			return;
		}
	}
	
	checkedRadio.checked = false;
}