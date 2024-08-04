import {add} from "./utility.js"
import {myself as myObject} from "./utility.js"
import mul from "./utility.js"
import * as maths from "./utility.js"
import axios from 'axios';



//Task-1
console.log(add(4,5))
//Output 9

//Task-2
console.log(myObject);
//Output
// {name: 'Piyush', branch: 'AIML', rollNo: 8009, greet: ƒ}
myObject.greet();
//Output
// Hello my name is Piyush

//Task-3
//Same as above

//Task-4
console.log(mul(4,5));
//Output:20

//Task-5
console.log(maths.subtract(4,2));
//Output-2

//Task-7
// async function fetchData() {
//     try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         console.log(response.data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }
// fetchData();