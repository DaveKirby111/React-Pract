import { useState } from "react";
// import Counter from "./Counter";
// import FunctionalCounter from "./FunctionalCounter";

export default function ConditionalComponent() {

    const [display, setDisplay] = useState(true);

   
   return display ? (
   <div><h3>Dragon Age</h3></div> 
   ) : (
   <div><h3>Final Fantasy</h3></div>
   );

 }

  // let output;

    // if (display) {
    //     output = <h3>Dragon Age</h3>;
    // } else {
    //     output = <h3>Final Fantasy</h3>;
    // }
    
    // return <div>{output}</div>;



// export default function ConditionalComponent() {

//     const [display, setDisplay] = useState(true);

//     if (display) {

//         return (
//         <div>
//         <FunctionalCounter></FunctionalCounter>
//         </div>
//         );

//     } else {

//         return (
//         <div>
//         <Counter></Counter>
//         </div>
//         );

//     }
   
// }