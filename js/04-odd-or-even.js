let num = 0
while (num < 16) {
	num++
    if (num % 2 == 0){
        oddOrEven = 'Even'
    } else {
        oddOrEven = 'Odd'
    }
	document.write(`${num} is ${oddOrEven}</br>`)
	}
console.log('I have reached the end!')