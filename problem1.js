//If we list all the natural numbers below 10 that are multiples of 
//3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

alert(problem1(1000));

function problem1(input){

var sum = 0;
for(var i=3; i < input; i = i + 3){
    if( i % 5 != 0)
        sum += i;
}
for(var i = 5; i < input; i = i + 5){
    sum += i;
}

return sum;
    
}