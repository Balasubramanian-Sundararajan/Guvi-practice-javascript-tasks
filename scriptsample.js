student =  {
    name: "Vikram",
    dept: "CSE",
    marks: [90,95,99,95,98]
}

function findTotal() {   
        let add = 0;
        let studentMarks = student.marks;
        for(let i=0; i<studentMarks.length;i++){
            add += studentMarks[i];    
        }
        //console.log(studentMarks);
        student ["total"]=add;
        console.log(student);
       // 
       
       // 
}   
    
findTotal();

 