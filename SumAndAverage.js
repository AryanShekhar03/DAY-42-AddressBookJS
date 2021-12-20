let num = 5;
let sum = 0;

for (i=0; i<5;i++)
{
    let twoDigitNum = Math.floor((Math.random()*90)+10);
    sum += twoDigitNum;
}
console.log("Sum of 5 number is " +sum);

let avg = sum/num;
console.log("Average of 5 number is " +avg);