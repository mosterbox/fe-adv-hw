// Globs
const btn = document.querySelector("#js-btn");
const tBody = document.querySelector("#js-tbody");
const htmlTpl = document.querySelector("#table-row").textContent.trim();
const compiled = _.template(htmlTpl);

// Получает массив объектов валют и используя LoDash шаблон рендерит результат
const updateView = currencies => {
    let htmlString = "";

    currencies.forEach(currency => {
        htmlString += compiled(currency);
    });

    tBody.innerHTML = htmlString;
};

// Напишем функцию которая будет возвращать результат fetch (обещание) к указаному url
const getCurrencyRates = () =>
    fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
    .then(response => {
        if (response.ok) return response.json();
        throw new Error("Error fetching data");
    })
    .catch(err => {
        console.error("Error: ", err);
    });

// При клике вызовем getCurrencyRates и после того как обещание выполнятся, внутри then отрендерим результат по шаблону
const onClick = () => {
    getCurrencyRates().then(currencies => {
        updateView(currencies);
    });
};

btn.addEventListener("click", onClick);
