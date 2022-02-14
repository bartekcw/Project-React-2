import React from 'react'
import { useState } from "react";
import CalculateExchange from './CalculateExchange';

const InputForm = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("EUR")

    function handleSubmit(event) {
        event.preventDefault();

        CalculateExchange(amount, currency)
    }

  return (
    <div className="formbox">
            <form className="exchangeform" onSubmit={handleSubmit}>
                <input type="number" defaultValue={amount} onChange={(e) => setAmount(e.target.value)} className="inputamount" id="amount" placeholder="100"/>
                <select onChange={(e) => setCurrency(e.target.value)} id="currency">
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="CHF">CHF</option>
                </select>
                <button type="submit" >Przelicz</button>
            </form>
            <div className="endbox">            
                <div className="formtext1">TO</div>
                <div className="formtext2" id="endvalue">0</div>
                <div className="formtext3">PLN</div>
            </div>
        </div>
  )
}

export default InputForm