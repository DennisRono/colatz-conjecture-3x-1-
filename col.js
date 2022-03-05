// //3x+1  -  /2
// const fs = require('fs')
// const file = 'dat.txt'

// const colatz = () => {
//     for (let i = 0; i < 1000; i++) {
//         let number = Math.floor(Math.random() * 1000) + 1;
//         (number===0)?number=Math.floor(Math.random() * 100) + 1:number=number
//         while(number !== 1){
//             if(number%2!==0){
//                 number = (number * 3) + 1;
//                 fs.appendFileSync( file, (number===1)?number.toString()+"\n":number.toString()+", ")
//             } else {
//                 number = number / 2;
//                 fs.appendFileSync( file, (number===1)?number.toString()+"\n":number.toString()+", ")
//             }
//         }
//     }
// }


// colatz();