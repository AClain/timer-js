(function () {
	const increaseButtons = document.getElementsByClassName("increase");
	const decreaseButtons = document.getElementsByClassName("decrease");

	for (let button of increaseButtons) {
		// "function()" instead of array function to avoid wrong "this" binding
		button.addEventListener("click", function () {
			const inputId = this.getAttribute("data-linked-input-id");
			const input = document.querySelector("input[data-input-id='" + inputId + "']");
			const inputValue = parseInt(input.value);

			if (typeof inputValue === "number") {
				input.value = inputValue < 9 ? inputValue + 1 : 9;
			}
		});
	}

	for (let button of decreaseButtons) {
		button.addEventListener("click", function () {
			const inputId = this.getAttribute("data-linked-input-id");
			const input = document.querySelector("input[data-input-id='" + inputId + "']");
			const inputValue = parseInt(input.value);

			if (typeof inputValue === "number") {
				input.value = inputValue > 0 ? inputValue - 1 : 0;
			}
		});
	}
})();
