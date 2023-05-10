// 1

let str = ' ';
for (let i = 20; i <= 30; i += 0.5){
	str += `${i},`;
}
console.log(str);

// 2

const value = 27;
for (let i = 10; i <= 100; i += 10){
	console.log(`$${i} - ₴${value * i}`);
}

//3

const n = 50;
for (let i = 1; i <= 100; i++){
    if (Math.pow(i, 2) <= n) {
    console.log(`${i}`)
    }
}

//4

const number =  40;
let numberValue = true;

if (number <= 1) {
	console.log("invalide value");
 } else if (number > 1) {
		for (i = 2; i < number; i++){
			if (number % i === 0){
				numberValue = false;	
			}
			
		}
 }			

 if (numberValue === false){
	console.log(`${number} is not a prime number`)
 } else {
	console.log(`${number} is a prime number`)
 }
    

 //5

const numberA = 9;
for ( i = 1; i < numberA; i++){
    if (numberA % 3 === 0) {
    	result = true;
    } else {
    	result = false;
    }
}
console.log(result);
