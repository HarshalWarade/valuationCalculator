let amt = document.getElementById('amt');
let equity = document.getElementById('equity');
let btn = document.getElementById('btn');
let valuation = document.getElementById('valuation');
btn.addEventListener('click', function(){
    valuation.innerHTML = (`₹ ${(amt.value/equity.value)*100}`);
})