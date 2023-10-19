let num = 0
let marcoPolo
while (num < 100) {
	num++
    if (num % 3 == 0 && num % 5 == 0){
        marcoPolo = 'Marco! Polo!'
    } else if (num % 5 == 0) {
        marcoPolo = 'Polo!'
    } else if (num % 3 == 0){
        marcoPolo = 'Marco!'
    } else {
        marcoPolo = ' '
    }
	document.write(`${num} is ${marcoPolo}</br>`)
	}
console.log('I have reached the end!')

