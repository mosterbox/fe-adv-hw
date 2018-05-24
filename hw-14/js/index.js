
/*
Создать две кнопки в HTML: start и stop.
Реализовать функционал таймера отсчета старта печати через функцию-конструктор со свойсвами startTime, stopTime и interval. Добавить в prototype методы start и stop.
При нажатии на кнопку start, функция сохраняет момент нажатия в свойство startTime.
При нажатии на кнопку stop, функция сохраняет значение текущего момента времени в stopTime и записывает разницу между startTime и stopTime в interval.
При нажатии на stop, значение interval выводится в консоль.
*/
const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');

btnStart.addEventListener('click', start_clk);
btnStop.addEventListener('click', stop_clk);

function Timer() {
    this.interval = '';
    this.startTime = '';
    this.stopTime = '';
}

Timer.prototype.start = () => {
    this.startTime = Date.now();
}

Timer.prototype.stop = () => {
    this.stopTime = Date.now();
    this.interval = this.stopTime - this.startTime;
    console.log(this.interval);
}

const timer = new Timer();

function start_clk(event) {
    timer.start();
}

function stop_clk(event) {
    timer.stop();
}
