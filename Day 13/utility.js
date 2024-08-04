function add(a,b){
    return a+b;
}
let myself={
    name:"PIyush",
    branch:"AIML",
    rollNo:8009,
    greet:function(){
        console.log(`Hello my name is ${myself.name}`);
        
    }
}
export {myself,add};

export default function multiplication(a,b){
    return a*b;
}
export function subtract(a, b) {
    return a - b;
}