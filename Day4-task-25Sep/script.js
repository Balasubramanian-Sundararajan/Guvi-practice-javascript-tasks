// How to compare two JSON have the same properties without order?

var obj1 = {"name":"Person1","age":5};
var obj2 = {"age":5,"name":"Person1"};

JSON.stringify(obj1) === JSON.stringify(obj2)
// false
    
_.isEqualWith(obj1, obj2);
console.log( _.isEqual(obj1, obj2) );

// Use the same rest countries and print all countries name, region, sub region and population

const getCountries =() => {
    const xhr =new XMLHttpRequest();
    xhr.open("GET","https://restcountries.eu/rest/v2/all");
    //  xhr.responseType = "json";
    
    xhr.onload = () => {
        const data = xhr.response;
        console.log(data);
      console.log(JSON.parse(data));
    
        const result = JSON.parse(data)
        .map((country)=>({
            name:country.name,
            population:country.population,
            region:country.region,
            subregion:country.subregion
        }));
        console.log(result)
    };
  xhr.send();
};
getCountries();