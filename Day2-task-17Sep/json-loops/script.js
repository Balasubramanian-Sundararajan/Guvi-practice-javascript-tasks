const json = [{
      "empid": "101",
      "firstname": "Balasubramanian",
      "lastname": "Sundararajan",
      "email": "balabe2006@gmail.com",
      "phone": "9884489867",
},
{     "empid": "102",
      "firstname": "Vetri",
      "lastname": "Vel",
      "email": "vetrib@gmail.com",
      "phone": "12345678",
}];

const skills = ["HTML", "CSS", "Javascript"];

//for loop - Loops can execute a block of code a number of times.
for(let i = 0; i < json.length; i++) {
    let arr = json[i];

    console.log(arr.empid);
    console.log(arr.firstname);
    console.log(arr.lastname);
    console.log(arr.email);
    console.log(arr.phone);

}
//forEach - method executes a provided function once for each array element
json.forEach(element => console.log(element.firstname));


//for In - for in statement loops through the properties of an Object
for (let key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].empid);
}
}
//for Of - for of statement loops through the values of any iterable object
let name = "";
for (let x of skills) {
 name += x+ " "; 
 console.log(name);
}
