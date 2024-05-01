// Promisify
// When a function perforn asyncronous task and recieving callback function and then we want we want to convert it into a promise then we use promisify;

const util=require('util');
function getData(){
    setTimeout(()=>{
        let a=5;
        if(a==5){
            callBack(null,"successful")
        }
        else{
            callBack(new Error("failed"))
        }
    },1000)
}
const test=util.promisify(getData)
test().then((msg)=>{console.log(msg)}).catch((err)=>{console.log(err)})