const studentAPIURL = 'http://studentapi-team-one.apps.vapo-aws-sbx.va.gov/student';

class Student{
    constructor(id,fname,lname,email,age,dob,type)
    {
        if (type==null)
        {
            this.id = id;        
            this.Age = age;            
        }

        this.firstName = fname;
        this.lastName = lname;
        this.email = email;
        this.dob = dob;
    }
}

//const btnEl = document.querySelector('#view');

/*
const viewStudents = async () =>{
    console.log("process data")
    try{
        const response = await fetch(studentAPIURL);
        let data = await response.json();

        if (!response.ok){
            console.log(data.description);
            return;
        }
        return data;
        
    }
    catch(error){
        console.log(error);
    }      

};

viewStudents().then(data=>{

    let index = data.length;  
    const student = new Student();
    
    //For each student fetched create a new object
    //of type student
    for (let i=0; i<index;i++){

        const student = new Student(
            data[i].id,
            data[i].firstName,
            data[i].lastName,
            data[i].email,
            data[i].age,
            data[i].dob            
            )

        // Create a table row within the table
        //for each student
        let trEl = document.createElement('tr');
        trEl.setAttribute("id","tr"+[i]);
        document.getElementById("tbStudent").appendChild(trEl);

        //Create table data element for each property
        //in the new object of type student
        let sindex = Object.getOwnPropertyNames(student).length;
        for(let j =0; j<sindex; j++)
        {
            let sKey = Object.keys(student)[j];
            let stuVal = student[sKey];
            let tdEl = document.createElement('td');
            tdEl.textContent = stuVal;
            document.getElementById("tr"+[i]).appendChild(tdEl);

        }

    }

    //Create Table Headings based on each property in the class
    for (var idx in student)
    {
        let thEl = document.createElement('th');
        thEl.textContent=idx;
        document.getElementById("theadTr").appendChild(thEl);
    }
})

btnEl.addEventListener('click', viewStudents);


const addStudents = async () =>{
    const student = new Student('','Jeff','Gordon','jg@yahoo.com','','1995-01-12','POST');
    let test = JSON.stringify(student);
    console.log(test);
    try{
        const response = await fetch(studentAPIURL,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(student)

        });
        let data = await response.json();

        if (!response.ok){
            console.log(data.description);
            return;
        }
        return data;
        
    }
    catch(error){
        console.log(error);
    }    
    

};

*/
const submitAddStudent=(event) =>{
    event.preventDefault();

    console.log("CLICK SUBMIT")

   // document.getElementById("form").reset();
}

//const btn2El = document.querySelector('#add');

//btn2El.addEventListener('click', addStudents);

const formEl = document.getElementById("form");

formEl.addEventListener('submit', submitAddStudent);