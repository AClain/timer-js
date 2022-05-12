export class Timer {
	/**
	 * @param {string} controlButtonsContainerSelector CSS selector
	 */
	constructor(controlButtonsContainerSelector) {
		this.isRunning = false;
		this.hours = 0;
		this.minutes = 0;
		this.seconds = 0;
		this.secondsLeft = 0;
		this.secondsElapsed = 0;

		this.controlButtonsContainer = document.querySelector(controlButtonsContainerSelector);
		this.startButton = this.controlButtonsContainer.querySelector("#start");
		this.pauseButton = this.controlButtonsContainer.querySelector("#pause");
		this.resetButton = this.controlButtonsContainer.querySelector("#reset");
	}

	/**
	 * Add the event listeners and hotkeys to the document.
	 */
	run() {
		this.startButton.addEventListener("click", () => {
			this.start();
		});

		this.pauseButton.addEventListener("click", () => {
			this.pause();
		});

		this.resetButton.addEventListener("click", () => {
			this.reset();
		});

		document.addEventListener("keypress", (e) => {
			if (e.code === "Space") {
				switch (this.isRunning) {
					case true:
						this.pauseButton.click();
						break;
					case false:
						this.startButton.click();
						break;
				}
			}

			if (e.code === "KeyR") {
				this.reset();
			}
		});
	}

	/**
	 * Start the timer.
	 *
	 * @returns true if the timer starts properly, false otherwise
	 */
	start() {
		this.hoursTimerInput = document.querySelector("#timer timer-input[hours]");
		this.minutesTimerInput = document.querySelector("#timer timer-input[minutes]");
		this.secondsTimerInput = document.querySelector("#timer timer-input[seconds]");

		this.hours = parseInt(this.hoursTimerInput.input.getAttribute("value"));
		this.minutes = parseInt(this.minutesTimerInput.input.getAttribute("value"));
		this.seconds = parseInt(this.secondsTimerInput.input.getAttribute("value"));

		this.secondsLeft = this.secondsLeft === 0 ? this.hours * 3600 + this.minutes * 60 + this.seconds : this.secondsLeft;

		if (this.secondsLeft <= 0) {
			this.reset();
			return false;
		}

		this.isRunning = true;

		const timerInputs = document.getElementsByTagName("timer-input");
		const event = new Event("start");

		for (let input of timerInputs) {
			input.dispatchEvent(event);
		}

		this.interval = setInterval(() => {
			this.secondsTimerInput.decreaseButton.click();
			if (this.secondsLeft > 0 && this.seconds - 1 < 0) {
				this.seconds = 59;
				this.secondsTimerInput.setValue(this.seconds);
			}

			if (this.secondsLeft > 0 && this.secondsLeft % 60 === 0) {
				if (this.minutes - 1 < 0) {
					this.minutes = 59;
				} else {
					this.minutes--;
				}
				this.minutesTimerInput.setValue(this.minutes);
			}

			if (this.hours > 0 && this.secondsLeft % 3600 === 0) {
				this.hours--;
				this.hoursTimerInput.setValue(this.hours);
			}

			if (this.secondsLeft === 0) {
				this.reset();
			}

			this.seconds--;
			this.secondsElapsed++;
			this.secondsLeft--;
		}, 1000);

		return true;
	}

	/**
	 * Pause the timer.
	 */
	pause() {
		this.isRunning = false;
		clearInterval(this.interval);
	}

	/**
	 * Reset the timer.
	 */
	reset() {
		this.isRunning = false;
		this.hours = 0;
		this.minutes = 0;
		this.seconds = 0;
		this.secondsLeft = 0;
		this.secondsElapsed = 0;

		const timerInputs = document.getElementsByTagName("timer-input");
		const event = new Event("reset");

		for (let input of timerInputs) {
			input.dispatchEvent(event);
		}

		clearInterval(this.interval);
	}
}
