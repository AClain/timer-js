export class TimerInput extends HTMLElement {
	constructor() {
		super();

		this.container = document.createElement("div");
		this.container.classList.add("d-flex", "flex-column", "align-items-center", "input-container");

		this.increaseButtonContainer = document.createElement("div");
		this.increaseButtonContainer.classList.add("d-flex", "justify-content-around", "align-items-center", "w-100");
		this.increaseButton = document.createElement("i");
		this.increaseButton.classList.add("fa-solid", "fa-caret-up", "change-input-value");
		this.increaseByTenButton = document.createElement("i");
		this.increaseByTenButton.classList.add("fa-solid", "fa-square-caret-up", "change-input-value");

		this.increaseButtonContainer.appendChild(this.increaseButton);
		this.increaseButtonContainer.appendChild(this.increaseByTenButton);

		this.input = document.createElement("input");
		this.input.setAttribute("disabled", true);
		this.input.setAttribute("type", "number");
		this.input.setAttribute("aria-label", this.getAttribute("label"));
		this.input.setAttribute("value", this.getAttribute("value"));
		this.input.classList.add("form-control");

		this.decreaseButtonContainer = document.createElement("div");
		this.decreaseButtonContainer.classList.add("d-flex", "justify-content-around", "align-items-center", "w-100");
		this.decreaseButton = document.createElement("i");
		this.decreaseButton.classList.add("fa-solid", "fa-caret-down", "change-input-value");
		this.decreaseByTenButton = document.createElement("i");
		this.decreaseByTenButton.classList.add("fa-solid", "fa-square-caret-down", "change-input-value");

		this.decreaseButtonContainer.appendChild(this.decreaseButton);
		this.decreaseButtonContainer.appendChild(this.decreaseByTenButton);

		this.container.appendChild(this.increaseButtonContainer);
		this.container.appendChild(this.input);
		this.container.appendChild(this.decreaseButtonContainer);
		this.appendChild(this.container);

		this.isHours = this.getAttribute("hours") !== null;
		this.isMinutes = this.getAttribute("minutes") !== null;
		this.isSeconds = this.getAttribute("seconds") !== null;

		this.maxValue = this.isHours ? 99 : 59;
	}

	connectedCallback() {
		this.increaseButton.addEventListener("click", () => {
			let inputValue = parseInt(this.input.getAttribute("value"));
			if (!isNaN(inputValue)) {
				this.input.setAttribute("value", inputValue < this.maxValue ? inputValue + 1 : this.maxValue);
			}
		});
		this.increaseByTenButton.addEventListener("click", () => {
			let inputValue = parseInt(this.input.getAttribute("value"));
			if (!isNaN(inputValue)) {
				this.input.setAttribute("value", inputValue + 10 < this.maxValue ? inputValue + 10 : this.maxValue);
			}
		});

		this.decreaseButton.addEventListener("click", () => {
			let inputValue = parseInt(this.input.getAttribute("value"));
			if (!isNaN(inputValue)) {
				this.input.setAttribute("value", inputValue > 0 ? inputValue - 1 : 0);
			}
		});
		this.decreaseByTenButton.addEventListener("click", () => {
			let inputValue = parseInt(this.input.getAttribute("value"));
			if (!isNaN(inputValue)) {
				this.input.setAttribute("value", inputValue - 10 > 0 ? inputValue - 10 : 0);
			}
		});

		this.addEventListener(
			"start",
			function (e) {
				this.increaseButton.classList.add("d-none");
				this.increaseByTenButton.classList.add("d-none");
				this.decreaseButton.classList.add("d-none");
				this.decreaseByTenButton.classList.add("d-none");
			},
			false
		);

		this.addEventListener(
			"reset",
			function (e) {
				this.increaseButton.classList.remove("d-none");
				this.increaseByTenButton.classList.remove("d-none");
				this.decreaseButton.classList.remove("d-none");
				this.decreaseByTenButton.classList.remove("d-none");

				this.input.setAttribute("value", 0);
			},
			false
		);
	}

	setValue(value) {
		this.input.setAttribute("value", value);
	}
}
