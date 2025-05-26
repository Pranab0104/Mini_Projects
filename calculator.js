gsap.registerPlugin(ScrollTrigger);

// Animate form
gsap.from(".calculator-form", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".calculator-form",
    start: "top 80%"
  }
});

function calculateLoan() {
  const principal = parseFloat(document.getElementById('principal').value);
  const annualRate = parseFloat(document.getElementById('rate').value);
  const years = parseFloat(document.getElementById('years').value);

  if (isNaN(principal) || isNaN(annualRate) || isNaN(years)) {
    document.getElementById('result').innerText = "Please enter valid numbers.";
    return;
  }

  const monthlyRate = (annualRate / 100) / 12;
  const totalPayments = years * 12;
  const x = Math.pow(1 + monthlyRate, totalPayments);
  const monthly = (principal * x * monthlyRate) / (x - 1);

  const resultText = `Estimated Monthly Payment: ₹${monthly.toFixed(2)}`;
  document.getElementById('result').innerText = resultText;
}
