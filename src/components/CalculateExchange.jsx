const CalculateExchange = (amount, currency) => {

    function calculateEurExchange(input) {
        fetch("https://api.nbp.pl/api/exchangerates/rates/a/eur/")
            .then((data) => data.json())
            .then((data) => {
                console.log("Kurs euro", data.rates[0].mid);
                let eurRate = data.rates[0].mid
                let endValue = (input * eurRate).toFixed(2)
                document.querySelector("#endvalue").innerHTML = endValue
            })
            .catch((err) => console.log(err))
    }

    function calculateUsdExchange(input) {
        fetch("https://api.nbp.pl/api/exchangerates/rates/a/usd/")
            .then((data) => data.json())
            .then((data) => {
                console.log("Kurs dolar amerykański", data.rates[0].mid);
                let usdRate = data.rates[0].mid
                let endValue = input * usdRate
                document.querySelector("#endvalue").innerHTML = endValue.toFixed(2)
            })
            .catch((err) => console.log(err))
    }
    
    function calculateChfExchange(input) {
        fetch("https://api.nbp.pl/api/exchangerates/rates/a/chf/")
            .then((data) => data.json())
            .then((data) => {
                console.log("Kurs frank szwajcarski", data.rates[0].mid);
                let chfRate = data.rates[0].mid
                let endValue = input * chfRate
                document.querySelector("#endvalue").innerHTML = endValue.toFixed(2)
            })
            .catch((err) => console.log(err))
    }
    

    if (currency === "EUR") {
        calculateEurExchange(amount)
    } else if (currency === "USD") {
        calculateUsdExchange(amount)
    } else if (currency === "CHF") {
        calculateChfExchange(amount)
    }
}

export default CalculateExchange