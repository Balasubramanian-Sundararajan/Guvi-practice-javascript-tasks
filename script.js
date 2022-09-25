// 24/09/2022 = Array of Objects and Functions Task

students = [ {
    name: "Balasubramanian",
    dept: "CSE",
    marks: [90,80,70,95,85]
},
{
    name: "Arun",
    dept: "MECH",
    marks:[90,80,80,95,85],
},
{
    name: "Suresh",
    dept: "MCA",
    marks: [90,80,60,95,95]
},
{
    name: "Sanjay",
    dept: "IT",
    marks: [98,99,100,99,99],
},
{
    name: "Vetri",
    dept: "CSE",
    marks: [100,100,100,99,100],
}
]
//console.log(student[2].marks);

function total() {
    for(let i=0; i<students.length;i++)
    {
        //console.log(students);
        let sum = 0;
        let studentMarks = students[i].marks;
        for(let j=0; j<students.length;j++) {
            sum += studentMarks[j];
        }
        students[i]["total"]=sum;
        //console.log(students);
    }
}
function average() {
    for(let i=0; i<students.length;i++)
    {
        const totalSubject = students[i].marks.length;
        students[i]["average"] = students[i].total / totalSubject;
        //console.log(students);
    }
}
function grade() {
    for(let i=0; i<students.length;i++)
    {
       if(students[i].average < 250) students[i] ["grade"] ="Pass";
       else students[i] ["grade"] = "Fail";
    }
}
function print() {
    console.log(students);
  }
  
total();
average();
grade();
print();