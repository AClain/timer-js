# timer-js

## Intro

Reproduction of a timer ([example](https://www.timeanddate.com/timer/)).

## Run project

Clone the repository using `git clone`.

### With PHP built-in web server

Go to the repository and run:

```
$ php -S localhost:8585
```

Go to `localhost:8585` to see the demo.

### With Apache or Nginx

Drop the repository into your local Apache or Nginx directory and see the demo on the dedicated port for Apache or Nginx.

## Usage

### Arrows

- The top first arrow increases the input by 1, the second increase it by 10.
- The bottom first arrow decreases the input by 1, the second decrease it 10.

### Cap

- Hours are caped at 99, minutes and seconds at 59, so maximum timer is `99h 59m 59s`.

### Controls

- Start: start the timer;
- Pause: pause the timer;
- Reset: reset the timer completely.

### Hotkeys

- Pressing <kbd>SPACE</kbd> starts or pauses the timer depending on its state.
- Pressing <kbd>R</kbd> resets the timer.

## Keywords

> javascript ; bootstrap ; OOP ; ES6 ; custom elements
