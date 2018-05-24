
/*
Создать две кнопки в HTML: start и stop.
Создать класс Timer с полями startTime, stopTime и interval. Создать несколько экземпляров класса с разными значениями свойств, вывести их в консоль.
Для класса Timer создать методы start и stop, getTime.
Создать экземпляр класса Timer, пусть он называется stopwatch.
При нажатии на кнопку start, метод stopwatch.start сохраняет момент нажатия в свойство startTime.
При нажатии на кнопку stop, метод stopwatch.stop сохраняет значение текущего момента времени в stopTime и записывает разницу между startTime и stopTime в interval. А метод stopwatch.getTime возвращает значение поля interval, которое необходимо вывести в консоль.
Для класса Timer создать статический метод timeToNY который возвращает кол-во дней от сегодня и до Нового Года.
*/
const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');

btnStart.addEventListener('click', start_clk);
btnStop.addEventListener('click', stop_clk);

class Timer {
    constructor(startTime, stopTime, interval) {
        this.startTime = startTime || 0;
        this.stopTime = stopTime || 0;
        this.interval = interval || 0;
    }

    start() {
        this.startTime = Date.now();
    }

    stop() {
        this.stopTime = Date.now();
        this.interval = this.stopTime - this.startTime;
    }

    getTime() {
        return this.interval;
    }
    disable(e) {
        return !e;
    }
}

const stopwatch = new Timer();


function start_clk(event) {
    stopwatch.start();
    btnStop.disabled = stopwatch.disable(btnStop.disabled);
    btnStart.disabled = true;
}

function stop_clk(event) {
    stopwatch.stop();
    btnStop.disabled = true;
    btnStart.disabled = stopwatch.disable(btnStart.disabled);
    console.log(stopwatch.getTime());

}
