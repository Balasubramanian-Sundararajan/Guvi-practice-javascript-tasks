
const div = document.createElement("div");
div.setAttribute("class", "container border main-container");

const header = document.createElement("h3");
header.setAttribute("class", "text-center");
header.innerHTML = "Calculator Design";
div.appendChild(header);

let input = document.getElementById("input");
input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "input");
input.setAttribute('placeholder', 'Type Here...');
div.appendChild(input);

const row = document.createElement("div");
row.setAttribute("class", "row");

const column1 = document.createElement("div");
column1.setAttribute("class", "col");
row.appendChild(column1);

const onebtn = document.createElement("button");
onebtn.setAttribute("type", "button");
onebtn.setAttribute("id", "onebtn");
onebtn.setAttribute("class", "btn btn-primary calc-btn");
onebtn.setAttribute("onclick", "calculate('1')");
onebtn.innerHTML = "1";
column1.append(onebtn);

const twobtn = document.createElement("button");
twobtn.setAttribute("type", "button");
twobtn.setAttribute("id", "twobtn");
twobtn.setAttribute("class", "btn btn-primary calc-btn");
twobtn.setAttribute("onclick", "calculate('2')");
twobtn.innerHTML = "2";
column1.append(twobtn);

const threebtn = document.createElement("button");
threebtn.setAttribute("type", "button");
threebtn.setAttribute("id", "threebtn");
threebtn.setAttribute("class", "btn btn-primary calc-btn");
threebtn.setAttribute("onclick", "calculate('3')");
threebtn.innerHTML = "3";
column1.append(threebtn);

const fourbtn = document.createElement("button");
fourbtn.setAttribute("type", "button");
fourbtn.setAttribute("id", "fourbtn");
fourbtn.setAttribute("class", "btn btn-primary calc-btn");
fourbtn.setAttribute("onclick", "calculate('4')");
fourbtn.innerHTML = "4";
column1.append(fourbtn);

const fivebtn = document.createElement("button");
fivebtn.setAttribute("type", "button");
fivebtn.setAttribute("id", "fivebtn");
fivebtn.setAttribute("class", "btn btn-primary calc-btn");
fivebtn.setAttribute("onclick", "calculate('5')");
fivebtn.innerHTML = "5";
column1.append(fivebtn);

const sixbtn = document.createElement("button");
sixbtn.setAttribute("type", "button");
sixbtn.setAttribute("id", "sixbtn");
sixbtn.setAttribute("class", "btn btn-primary calc-btn");
sixbtn.setAttribute("onclick", "calculate('6')");
sixbtn.innerHTML = "6";
column1.append(sixbtn);

const sevenbtn = document.createElement("button");
sevenbtn.setAttribute("type", "button");
sevenbtn.setAttribute("id", "sevenbtn");
sevenbtn.setAttribute("class", "btn btn-primary calc-btn");
sevenbtn.setAttribute("onclick", "calculate('7')");
sevenbtn.innerHTML = "7";
column1.append(sevenbtn);

const eightbtn = document.createElement("button");
eightbtn.setAttribute("type", "button");
eightbtn.setAttribute("id", "eightbtn");
eightbtn.setAttribute("class", "btn btn-primary calc-btn");
eightbtn.setAttribute("onclick", "calculate('8')");
eightbtn.innerHTML = "8";
column1.append(eightbtn);

const ninebtn = document.createElement("button");
ninebtn.setAttribute("type", "button");
ninebtn.setAttribute("id", "ninebtn");
ninebtn.setAttribute("class", "btn btn-primary calc-btn");
ninebtn.setAttribute("onclick", "calculate('9')");
ninebtn.innerHTML = "9";
column1.append(ninebtn);

const zerobtn = document.createElement("button");
zerobtn.setAttribute("type", "button");
zerobtn.setAttribute("id", "zerobtn");
zerobtn.setAttribute("class", "btn btn-primary calc-btn");
zerobtn.setAttribute("onclick", "calculate('0')");
zerobtn.innerHTML = "0";
column1.append(zerobtn);

const dotbtn = document.createElement("button");
dotbtn.setAttribute("type", "button");
dotbtn.setAttribute("id", "dotbtn");
dotbtn.setAttribute("class", "btn btn-primary calc-btn");
dotbtn.innerHTML = ".";
column1.append(dotbtn);

const clearbtn = document.createElement("button");
clearbtn.setAttribute("type", "button");
clearbtn.setAttribute("id", "clearbtn");
clearbtn.setAttribute("class", "btn btn-primary calc-btn");
clearbtn.setAttribute("onclick", "clearFields()");
clearbtn.innerHTML = "C";
column1.append(clearbtn);

const equalbtn = document.createElement("button");
equalbtn.setAttribute("type", "button");
equalbtn.setAttribute("id", "equalbtn");
equalbtn.setAttribute("class", "btn btn-success equal-btn");
equalbtn.setAttribute("onclick", "equal()");
equalbtn.innerHTML = "=";
column1.append(equalbtn);



const column2 = document.createElement("div");
column2.setAttribute("class", "col flex-column bd-highlight mb-3 number-container");
row.appendChild(column2);

const plusbtn = document.createElement("button");
plusbtn.setAttribute("type", "button");
plusbtn.setAttribute("id", "plusbtn");
plusbtn.setAttribute("onclick", "calculate('+')");
plusbtn.setAttribute("class", "btn btn-success calc-btn");
plusbtn.innerHTML = "+";
column2.append(plusbtn);

const minusbtn = document.createElement("button");
minusbtn.setAttribute("type", "button");
minusbtn.setAttribute("id", "minusbtn");
minusbtn.setAttribute("onclick", "calculate('-')");
minusbtn.setAttribute("class", "btn btn-success calc-btn");
minusbtn.innerHTML = "-";
column2.append(minusbtn);

const multbutton = document.createElement("button");
multbutton.setAttribute("type", "button");
multbutton.setAttribute("id", "multbutton");
multbutton.setAttribute("onclick",  "calculate('*')");
multbutton.setAttribute("class", "btn btn-success calc-btn");
multbutton.innerHTML = "*";
column2.append(multbutton);

const divisionbutton = document.createElement("button");
divisionbutton.setAttribute("type", "button");
divisionbutton.setAttribute("id", "divisionbutton");
divisionbutton.setAttribute("onclick", "calculate('/')");
divisionbutton.setAttribute("class", "btn btn-success calc-btn");
divisionbutton.innerHTML = "/";
column2.append(divisionbutton);

div.appendChild(row);
document.body.append(div);

function calculate(value) {
  input.value +=value;
}

function equal() {
    input.value = eval(input.value);
}

function clearFields() {
   document.getElementById("input").value="";
}


