let coinFlip
let flipTimes = parseInt(prompt('Enter number of times to flip coin'))



for (let i =0; i < flipTimes; i++) {
    coinFlip = parseInt(Math.round(Math.random()))
if (coinFlip == 0){
    outcome = 'Heads'
} else if (coinFlip == 1) {
    outcome = "Tails"
}
    document.write(`Heads or tails: ${outcome}</br>`)
}

