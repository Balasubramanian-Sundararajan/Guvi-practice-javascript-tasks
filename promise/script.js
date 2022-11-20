//Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
     resolve("Bala");
    }, 1000);
});

myPromise.then((value) => {
    console.log(value);

});
myPromise.catch((error)=>{
    console.log(error);
});

// Promise.all

const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(()=> {
     resolve("Bala");
    }, 1000);
});
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(()=> {
     resolve("Vetri");
    }, 2000);
});
const myPromise3 = new Promise((resolve, reject) => {
    setTimeout(()=> {
     resolve("Varu");
    }, 3000);
});

Promise.all([myPromise1,myPromise2,myPromise3]).then((values) => {
    console.log(values);
});