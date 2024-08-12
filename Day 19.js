// Activity 01 :- basic regular expression
// task 01

const res = /javascript/gi;
let str = "javascript is my favourite. i love javascript";
const matches = str.match(res);

console.log(matches);
// output :- [ 'javascript', 'javascript' ]

// task 02
const digits=/[0-9]+/gi;
let strin="he has 30 ruppees and he send 12 to one friend and 18 to other.";
let ans=strin.match(digits);
console.log(ans);
// outpurt :- [ '30', '12', '18' ]

// character classes and quantifiers
const start=/[A-Z][a-z]*/g;
let ques="Piyush, You are A topper";
let res2= ques.match(start);
console.log(res);
// [ 'Piyush', 'You', 'A' ]


//grouping and capturing

const phone="(123)456-7890";
const pattern=/\(([0-9]{3})\)([0-9]{3})\-([0-9]{4})/;
const matchess=phone.match(pattern);
console.log("Area code",matchess[1]);
console.log("Central Office code",matchess[2]);
console.log("Line number",matchess[3]);
// Area code 123
// Central Office code 456
// Line number 7890

// task6
const user=/([0-9a-zA-Z]+)\@([a-zA-Z]*\.[a-zA-Z]+\.[a-zA-Z]+)/;
let email="11ac@nitkkr.ac.in";
let match1=email.match(user);
console.log(match1[1]);
console.log(match1[2]);
// 11ac
// nitkkr.ac.in

// task7
const word=/^(dog)/
let match2="dog come here";
let begin=match2.match(word);
console.log(begin);
// [ 'dog', 'dog', index: 0, input: 'dog come here', groups: undefined ]

//task8
const text3="Many developers love.";
const end = /Javascript\.$/;
const matches3=text3.match(end);
console.log(matches3);
// null

// task9
function validatePassword(password) {
    const hasUppercase=/[A-Z]/.test(password);
    const hasLowercase=/[a-z]/.test(password);
    const hasDigit=/\d/.test(password);
    const hasSpecialChar=/[!@#$%^&*]/.test(password);

    if (hasUppercase && hasLowercase && hasDigit && hasSpecialChar) 
    {
        console.log("Password is valid.");
    } 
    else 
    {
        console.log("Password is invalid.");
    }
}

validatePassword("Password1!");
validatePassword("pass");
// Password is valid.
// Password is invalid.

//Task10 
const urlvalid=/^(https:\/\/)([a-zA-Z0-9-]+\.)/;

function validateURL(url) {
    if (urlvalid.test(url)) 
    {
        console.log("URL is valid.");
    } else 
    {
        console.log("URL is invalid.");
    }
}

validateURL("https://www.example.com");
validateURL("ftp://example.com");

// URL is valid.
// URL is invalid