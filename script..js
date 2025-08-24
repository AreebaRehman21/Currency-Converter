const rates = {
      USD: { PKR: 280, EUR: 0.92 },
      PKR: { USD: 0.0036, EUR: 0.0033 },
      EUR: { USD: 1.09, PKR: 305 }
    };

    function convertCurrency() {
      const amount = parseFloat(document.getElementById("amount").value);
      const from = document.getElementById("fromCurrency").value;
      const to = document.getElementById("toCurrency").value;

      if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerText = "Enter a valid amount.";
        return;
      }

      if (from === to) {
        document.getElementById("result").innerText = `${amount} ${from} = ${amount} ${to}`;
        return;
      }

      const rate = rates[from][to];
      const converted = (amount * rate).toFixed(2);
      document.getElementById("result").innerText = `${amount} ${from} = ${converted} ${to}`;
    }

    function resetConverter() {
      document.getElementById("amount").value = "";
      document.getElementById("fromCurrency").selectedIndex = 0;
      document.getElementById("toCurrency").selectedIndex = 0;
      document.getElementById("result").innerText = "";
    }
