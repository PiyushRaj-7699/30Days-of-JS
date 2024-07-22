// Activity -1 

// Task - 1 - For Loop

for(let i=1;i<=10;i++){
    console.log(`Current Number is ${i}`);
}

// Task -2 
for(let i=1;i<=10;i++){
    console.log(` 5 * ${i} = ${5*i}`);
}

// Activity - 2 - While Loop

// Task - 3
let sum = 0;
let i=1;
while(i<=10){
    sum=sum+ i;
    i++;
}
console.log(` The sum of numbers is ${sum}`);

// Task - 4
let j = 10;
while(j>=1){
    console.log(j);
    j--;
}

// Activity - 3 - Do while loop

// Task -5 
let k =1;

do{
    console.log(k);
    k++;
}while(k<=5);

// Task -6 
let number =16;
let result = 1;
do{
    result*=number;
    number--;
}while(number>=1);
console.log(`Factorial of the number is ${result}`);

// Activity - 4 Nested loops

// Task - 7 
let num = 5;
for(let i =1; i<=num;i++){
    let star ='';
    for(let j=1;j<=i;j++){
        star +='* ';
    }
    console.log(star);
}