//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

alert(problem3(600851475143));

function problem3(input){
	var numToFactor = input;
	for(var i = 2; i < numToFactor; i++){
		if(numToFactor % i == 0){
			numToFactor = numToFactor/i;
			i=2;
		}
	}
	return numToFactor;
	
}