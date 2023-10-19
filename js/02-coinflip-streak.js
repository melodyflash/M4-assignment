
let coinFlip
let outcome
do {
	coinFlip = parseInt(Math.round(Math.random()))
    if (coinFlip == 0){
        outcome = 'Heads'
    } else if (coinFlip == 1) {
        outcome = "Tails"
    }
    document.write(`${outcome}</br>`)
} while (coinFlip == 1)
document.write('end!')
