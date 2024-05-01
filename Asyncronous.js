//  An asynchronous operation is one that allows the program to continue executing while waiting for some other operation to complete. JavaScript is both synchronous and asynchronous.

console.log("Start")
setTimeout(()=>{
    console.log("Middle")
},10000)
setInterval(()=>{
    console.log(new Date)
},2000)
console.log("End")