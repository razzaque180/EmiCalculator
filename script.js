document.addEventListener("DOMContentLoaded",function(){
    const loanAmountInput = document.getElementById("loan-amount");
    const interestRateInput = document.getElementById("interest-rate");
    const loanTenureInput = document.getElementById("loan-tenure");

    const loanAmountDisplay = document.getElementById("loan-amount-display");
    const interestRateDisplay = document.getElementById("interest-rate-display");
    const loanTenureDisplay = document.getElementById("loan-tenure-display");

    const emiResult = document.getElementById("emi-result");

    function updateEMI(){
        const loanAmount = parseFloat(loanAmountInput.value);
        const annualInterestRate = parseFloat(interestRateInput.value);
        const loanTenure = parseInt(loanTenureInput.value);

        const monthlyInterestRate = annualInterestRate / (12*100);
        const numberOfMonths = loanTenure * 12;

        const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths))/
        (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

        loanAmountDisplay.textContent = `${loanAmount.toLocaleString()}`;
        interestRateDisplay.textContent = `${annualInterestRate}%`;
        loanTenureDisplay.textContent = `${loanTenure} Yr`;

        emiResult.textContent = emi.toFixed(2);
        
    }

    loanAmountInput.addEventListener("input", updateEMI);
    interestRateInput.addEventListener("input",updateEMI);
    loanTenureInput.addEventListener("input",updateEMI);

    updateEMI();
});