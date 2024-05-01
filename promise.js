// A Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected. promisify is a utility function that converts a function that accepts a callback into a function that returns a Promise.

function getData(){
    return new Promise((resolve,resected)=>{
        setTimeout(()=>{
            let a=5;
            if(a==5){
                resolve("i am resolved");
            }
            else{
                resected(new Error("Failed"))
            }
        },1000)
    })
}
getData().then((msg)=>{console.log(msg)}).catch((err)=>{console.log(err)});

