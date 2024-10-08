//Activity-1 Selecting and Manipulating Objects

//Task-1
let toChange = document.getElementById('change');
toChange.innerHTML = "Text Changed";

//Task-2
let toChangeBg = document.querySelector(".bg-change");
toChangeBg.addEventListener('click', () => {
    toChangeBg.style.backgroundColor = 'lightblue'; // Corrected property name
});

//Activity-2 - Creating and appending elements

//Task-3
let div = document.createElement('div')
div.innerHTML="This is a new div"
document.body.append(div)

//Task-4
let ul=document.querySelector("ul");
let li=document.createElement('li')
li.innerHTML="Object made by Js";
ul.appendChild(li);

//Activity-3 Removing Elements

//Task-5
// document.querySelector(".bg-change");
// toChangeBg.addEventListener('mouseover', () => {
//     toChangeBg.remove();
// });

//Task-6
let parent = document.querySelector("ul");
let lastChild=parent.lastChild;
lastChild.addEventListener('click',()=>{
    lastChild.remove();
})

//Activity-4 Modifying Attributes and Classes

//Task-7
let image=document.querySelector(".changeTo")
let button = document.querySelector(".changeImage");
button.addEventListener('click',()=>{
    image.src="data:image/jpeg;base64,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"
})

//Task-8




//Task-9
let changeButton=document.querySelector('#changeButton');
let para=document.querySelector('.changePara');
changeButton.addEventListener('click', ()=>{
    para.innerHTML="Hello,Gunika Devi"
})

//Task-10
toChangeBg.addEventListener('mouseover', ()=>{
    toChangeBg.style.border='2px solid yellow'
})